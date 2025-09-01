"use client";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useState } from "react";

function HomeBtn() {
  const [isOpened, setIsOpened] = useState(true);

  function handleOnClick() {
    setIsOpened((e) => !e);
  }

  return (
    <>
      <div className="fixed rounded-full bottom-10 right-4 z-100 bg-[black] border border-[#4b4b4b] w-12 h-12 group xl:right-28 md:right-8 cursor-pointer">
        <div
          className="text-[#cdcdcd] w-full h-full p-3 group-hover:text-[#ea590b] duration-500 justify-center items-center flex"
          onClick={handleOnClick}
        >
          {isOpened ? (
            <FontAwesomeIcon icon={faXmark} className="hover:text-red-500" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          )}
        </div>
      </div>
      <Link
        href={"https://www.linkedin.com/in/yan-ting-lam-3a040b361/"}
        target="_blank"
        className={`fixed rounded-full bottom-10 right-4 z-10 bg-[black] border border-[#4b4b4b] w-12 h-12 group xl:right-28 md:right-8 duration-700 ${
          isOpened ? "-translate-y-13 block" : " translate-y-0"
        }`}
      >
        <div className="text-[#cdcdcd] w-full h-full p-3 group-hover:text-[#ea590b] duration-500 justify-center items-center flex ">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
        </div>
      </Link>
      <Link
        href="/"
        className={`fixed rounded-full bottom-10 right-4 z-10 bg-[black] border border-[#4b4b4b] w-12 h-12 group xl:right-28 md:right-8 duration-700 ${
          isOpened ? "-translate-y-26 block" : " translate-y-0"
        }`}
      >
        <div className="text-[#cdcdcd] w-full h-full p-3 group-hover:text-[#ea590b] duration-500 justify-center items-center flex ">
          <FontAwesomeIcon icon={faHouse} className="text-xl" />
        </div>
      </Link>
    </>
  );
}

export default HomeBtn;
