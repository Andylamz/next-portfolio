function ContactHeader() {
  return (
    <section
      id="contact-me-header"
      className="flex flex-col items-center justify-center mt-8 text-3xl gap-8"
    >
      <h3 className="text-white">Contact Me</h3>
      <div className="text-base text-center">
        <p className="w-full max-w-205 text-[#a7a7a7] tracking-wider select-none">
          I am currently open to opportunities in frontend and fullstack
          development. If you are looking for someone with hands-on experience
          in React, Next.js and the MERN stack, please don't hesitate to get in
          touch.
        </p>
      </div>
    </section>
  );
}

export default ContactHeader;
