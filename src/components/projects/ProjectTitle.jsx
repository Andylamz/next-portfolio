function ProjectTitle({ data }) {
  console.log(data);
  return (
    <div className="flex justify-center lg:mt-16 text-4xl">
      <div className=" text-[#474fc9] font-medium tracking-wide gap-6">
        <h3>{data.title.toUpperCase()}</h3>
        <div className="py-3">
          <p className="text-base align-bottom text-[#9a9bbf] text-center">
            {data.framework}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTitle;
