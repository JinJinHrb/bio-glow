import Image from "next/image";
import Link from "next/link";
import photos from "@/data/photos";

const Page = () => {

  return (
    <>
      <h1 className={'text-3xl text-green-900'}>Hello Marketing @Blog Page</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 auto-rows-max gap-6 m-10">
          {photos.map((fid) => {
            const { id, imgSrc } = fid;
            return <Link key={`photo-${id}`} href={`/photos/${id}`}>
              <Image
                alt=""
                src={imgSrc} // 假设imageSrc是fid对应的图片源，实际中需要根据fid获取  
                height="100"
                width="100"
                className="object-cover aspect-square rounded-full"
              />
            </Link>
          }
          )}
        </div>
      </div>
    </>
  );
};

export default Page;