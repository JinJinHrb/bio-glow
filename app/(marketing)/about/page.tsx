import React from 'react'

const Page = ({ description }: { description: string }) => {
  return (
    <>
      <h1 className={'text-3xl text-green-900'}>Hello Marketing @About Page</h1>
      <p>{description}</p>
    </>
  );
};

export default Page;