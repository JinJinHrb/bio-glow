import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(param: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
  // analytics?: React.ReactNode;
  // team?: React.ReactNode;
}>) {

  const {
    children,
    modal
    // analytics,
    // team
  } = param

  setTimeout(() => {
    console.log('RootLayout')
  }, 8000);

  return <html lang="en">
    <body className={inter.className}>
      <Suspense fallback={<Loading />}>
        {/* <div className={"p-4 border border-grey-800 border-solid border-1"}>Root Layout</div> */}
        {/* <div className={"p-4 border border-grey-800 border-solid border-1"}>{analytics}</div> */}
        {/* <div className={"p-4 border border-grey-800 border-solid border-1"}>{team}</div> */}
        <div>{children}</div>
        <div>{modal}</div>
      </Suspense>
    </body>
  </html>
}
