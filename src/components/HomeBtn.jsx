import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

function HomeBtn() {
  return (
    <Link
      href="/"
      className="fixed rounded-full bottom-10 right-4 z-100 bg-[#4b4b4b] w-12 h-12 group xl:right-28 md:right-8"
    >
      <div className="text-[#cdcdcd] w-full h-full p-3 group-hover:text-[#ea590b] duration-500 justify-center items-center flex ">
        <FontAwesomeIcon icon={faHouse} className="text-xl" />
      </div>
    </Link>
  );
}

export default HomeBtn;
