import { PhotoData } from '@/data/photos'


import Image from 'next/image';

// 参考：https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
// 参考：https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
export const Photo = ({ photo }: { photo?: PhotoData }) => {
  return (
    photo ?
      <>
        <Image
          src={photo.imgSrc}
          alt={""}
          width={600}
          height={600}
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{photo.name}</h3>
          <p>Taken by {photo.username}</p>
        </div>
      </> : null
  );
}
