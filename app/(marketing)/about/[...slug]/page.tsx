'use client'

import { useState } from 'react'
import { Button } from 'antd'
import { useMessageHook } from '@/hooks/messageHook'

export const Page = ({ params }: { params: { slug: string[] } }) => {
  const [contextHolder, showMessage] = useMessageHook({ duration: 3000, maxCount: 3 })
  const [count, setCount] = useState(0)

  if (count > 0 && count % 5 === 0) {
    throw new Error('Too many requests')
  }

  return <>{contextHolder}
    <div className={`p-2`}>
      <h1>Catch-All Slug Page @{params.slug.join('/')}</h1>
      <p className={`p-4`}><Button size={'small'} onClick={() => {
        if (typeof showMessage === 'function') {
          showMessage(`random number: ${Math.random()}`);
        }
      }}>send message</Button></p>
      <p>count: {count} <Button size={'small'} onClick={() => setCount(count + 1)}>+</Button></p>
    </div></>
}

export default Page