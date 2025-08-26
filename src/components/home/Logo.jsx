import Image from "next/image";
function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src={"/brand_logo.png"}
        alt="Brand Logo"
        width={251}
        height={100}
      />
    </div>
  );
}

export default Logo;
