import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function SocialContainer() {
  return (
    <div className="flex justify-center gap-15 mt-8">
      <Link
        href={"https://www.linkedin.com/in/yan-ting-lam-3a040b361/"}
        target="_blank"
        className="flex justify-center items-center w-12 h-12 p-3 rounded-full border group border-[#ea590b]  hover:bg-[#ea590b]  hover:scale-115 duration-500 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="text-[#ea590b] group-hover:text-[white] duration-500"
        />
      </Link>
      <Link
        href={"https://github.com/andylamz"}
        target="_blank"
        className="flex w-12 h-12 justify-center items-center p-3 rounded-full border border-[#ea590b]  hover:bg-[#ea590b]  hover:scale-115 duration-500 cursor-pointer group"
      >
        <FontAwesomeIcon
          className="text-[#ea590b] group-hover:text-[white] duration-500"
          icon={faGithub}
        />
      </Link>
    </div>
  );
}

export default SocialContainer;
