import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import logo_dark from "../../../public/images/logo/jma-removebg.png";
import logo_light from "../../../public/images/logo/jma_white_logo.png";

const Logo = () => {
  return (
    <>
      <Link href="/" className="mx-auto inline-block max-w-[160px]">
        <Image
          src={logo_dark}
          alt="logo"
          width={140}
          height={30}
          className="dark:hidden"
        />
        <Image
          src={logo_light}
          alt="logo"
          width={140}
          height={30}
          className="hidden dark:block"
        />
      </Link>
    </>
  )
}

export default Logo