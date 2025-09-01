function ProjectTitle({ data }) {
  console.log(data);
  return (
    <div className="flex justify-center lg:mt-16 text-4xl">
      <h3 className="text-[#474fc9] font-medium tracking-wide">
        {data.title.toUpperCase()}
      </h3>
    </div>
  );
}

export default ProjectTitle;
