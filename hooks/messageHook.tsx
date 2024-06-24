import { useRef } from 'react';
import { ArgsProps, NoticeType } from 'antd/es/message/interface';
import { message } from 'antd'

type MessageProps = ArgsProps & { key: number }

export const useSimpleMessageHook = (params: { duration: number, maxCount: number }) => {
  const { duration, maxCount } = params
  const [messageApi, contextHolder] = message.useMessage({ maxCount })

  const showMessage = (content: string, type?: NoticeType) => {
    // 生成一个唯一ID作为消息时间戳
    const durationInS = isNaN(duration) ? -1 : Math.floor(duration / 1000)
    // 生成一个唯一ID作为消息时间戳
    const messageId = Date.now();
    // 创建新消息对象  
    const newMessage: MessageProps = { key: messageId, content, type: type ?? 'info' };
    if (durationInS > 0) {
      newMessage.duration = durationInS
    }
    messageApi.open(newMessage)
  }

  return [contextHolder, showMessage]
};


export const useMessageHook = (params: { duration: number, maxCount: number }) => {
  const { duration, maxCount } = params
  const [messageApi, contextHolder] = message.useMessage({ maxCount })

  const messageRef = useRef<MessageProps[]>()

  const showMessage = (content: string, type?: NoticeType) => {
    // 生成一个唯一ID作为消息时间戳
    const messageId = Date.now();
    const durationInS = isNaN(duration) ? -1 : Math.floor(duration / 1000)
    messageRef.current = (messageRef.current ?? []).filter(a => (messageId - a.key) <= duration)

    // 创建新消息对象  
    const newMessage: MessageProps = { key: messageId, content, type: type ?? 'info' };
    if (durationInS > 0) {
      newMessage.duration = durationInS
    }
    if (messageRef.current) {
      messageRef.current.push(newMessage);
      messageApi.open(newMessage)
    } else {
      messageRef.current = [newMessage];
    }
    const shiftLength = messageRef.current.length - maxCount;
    if (shiftLength > 0) {
      const shiftMessages = messageRef.current.slice(0, shiftLength)
      shiftMessages.forEach(a => {
        messageApi.destroy(a.key)
      })
      messageRef.current = messageRef.current.slice(shiftLength);
    }
  }

  return [contextHolder, showMessage]
};