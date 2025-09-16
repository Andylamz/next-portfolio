import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Social() {
  return (
    <div className="flex mx-auto w-full max-w-100 gap-2 items-center my-6">
      <Link
        href={"https://www.linkedin.com/in/yan-ting-lam-3a040b361/"}
        target="_blank"
        className="flex-1 text-center bg-[#4b4b4b] py-2 rounded-sm h-10 w-full group"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="text-[white] group-hover:text-[#ea590b] duration-500 text-lg h-[18px] w-[22.5px] group-hover:scale-120"
        />
      </Link>
      <Link
        href={"https://github.com/andylamz"}
        target="_blank"
        className="flex-1 text-center bg-[#4b4b4b] py-2 rounded-sm h-10 w-full group"
      >
        <FontAwesomeIcon
          className="text-[white] group-hover:text-[#ea590b] duration-500 text-lg max-h-[18px] group-hover:scale-120"
          icon={faGithub}
        />
      </Link>
    </div>
  );
}

export default Social;
