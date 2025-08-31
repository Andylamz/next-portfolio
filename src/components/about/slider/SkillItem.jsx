import Image from "next/image";

function SkillItem({ path, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="">
        <Image
          src={path}
          width={70}
          height={50}
          alt={`${title}`}
          className="h-full"
        />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default SkillItem;
