import { Photo } from "@/components/frame";
import Modal from "@/components/modal";
import photos from "@/data/photos";

export default function PhotoModal(arg: { params: { id: number | string } }) {

  let { params: { id } } = arg
  if (typeof id === 'string') {
    id = parseInt(id)
  }
  const photo = photos.find((p) => p.id === id);

  // TODO: 添加适当的逻辑来处理未找到照片的情况  
  if (!photo) {
    // 示例：返回空模态框或错误消息  
    return <Modal><div>照片未找到 id: {id}</div></Modal>;
  }

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}