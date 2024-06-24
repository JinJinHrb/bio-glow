
import photos from "@/data/photos";
import { Photo } from "@/components/frame";

const PhotoPage = (arg: { params: { id: number | string } }) => {
  let { params: { id } } = arg
  if (typeof id === 'string') {
    id = parseInt(id)
  }
  const photo = photos.find((p) => p.id === id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-amber-600">
        <Photo photo={photo} />
      </div>
    </div>
  );
}

export default PhotoPage;