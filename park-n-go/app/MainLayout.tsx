// React/Next.js components
import Image from "next/image";
import "./globals.css"

import Link from 'next/link'

// Flowbite components
import { Navbar } from "flowbite-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-auto">
      <Navbar fluid className="px-[8%] lg:px-32 bg-mainBlue py-4 h-28 w-full flex-col content-center justify-items-start">
        {/* <Image
          src="/images/ParkNGo_Icon.png"
          height={100}
          width={100}
          alt="ParkNGo Logo"
        /> */}
        <span className="text-left text-5xl font-oswald font-bold text-white">
          <h1>ParkNGo</h1>
          <h2 className="text-base font-sans-serif-3 font-normal">A carpark locator application</h2>
        </span>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-lg font-bold text-white">
          <Link href="/dashboard">
            <h1 className="self-center whitespace-nowrap text-lg font-semibold text-white" >Home</h1>
          </Link>
          <Link href="/search">
            <h1 className="self-center whitespace-nowrap text-lg font-semibold text-white" >Search</h1>
          </Link>
          <Link href="/about">
            <h1 className="self-center whitespace-nowrap text-lg font-semibold text-white" >About</h1>
          </Link>
          <Link href="/contact">
            <h1 className="self-center whitespace-nowrap text-lg font-semibold text-white" >Contact</h1>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="mx-[8%] mt-[5%] lg:mx-32">{children}</div>
      {/* <div className="mx-32 mt-4">{children}</div> */}

      {/* Animation */}
      {/* <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
}

/*
Original layout

  <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
  </div>
*/