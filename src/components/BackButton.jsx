"use client";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  function handleOnClickBack() {
    router.back();
  }
  return (
    <div
      className="flex text-lg items-center gap-1 hover:-translate-x-3 duration-800 cursor-pointer max-w-20"
      onClick={handleOnClickBack}
    >
      <div className="max-w-6">
        <FontAwesomeIcon icon={faCaretLeft} className="w-full" />
      </div>
      <p>Back</p>
    </div>
  );
}

export default BackButton;
