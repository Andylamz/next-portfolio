import FuzzyText from "./FuzzyText";

function ShortIntro() {
  return (
    <div className="flex flex-col gap-2 max-h-50px w-full max-w-[800px] mx-auto text-center">
      <div className="flex justify-center">
        <FuzzyText>Full-Stack Developer</FuzzyText>
      </div>
      <div className="flex justify-center">
        <FuzzyText>JavaScript, MERN, Next.js</FuzzyText>
      </div>
    </div>
  );
}

export default ShortIntro;
