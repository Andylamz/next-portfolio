import {
  faAddressBook,
  faAddressCard,
  faFileCode,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function NavigationCard({ icon, title, link }) {
  return (
    <Link
      href={link}
      className="flex justify-center group items-center flex-1 bg-[#111111] py-15 rounded-2xl  hover:bg-[#f8742d]  hover:scale-105 active:bg-[#f8742d]  active:scale-105 duration-500 cursor-pointer"
      tabIndex={0}
      aria-label={`${title} Button`}
    >
      <div className=" text-center flex flex-col gap-4 text-[#cdcdcd] group-hover:text-[#1d1d1d] group-hover:scale-110  group-active:text-[#1d1d1d] group-active:scale-110 duration-500">
        {icon === "address" && (
          <FontAwesomeIcon icon={faAddressCard} size={"5x"} />
        )}
        {icon === "file" && <FontAwesomeIcon icon={faFileCode} size={"5x"} />}
        {icon === "inbox" && <FontAwesomeIcon icon={faInbox} size={"5x"} />}

        <p className="text-lg text-nowrap">{title}</p>
      </div>
    </Link>
  );
}

export default NavigationCard;
