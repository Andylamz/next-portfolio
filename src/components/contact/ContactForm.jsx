"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID;

  async function sendEmail(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return toast.error("Please fill in all fields");
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        publicKey
      );
      setName("");
      setEmail("");
      setMessage("");
      return toast.success("Email sent", {
        autoClose: 800,
      });
    } catch (err) {
      console.log(err.message);
      return toast.error("Failed to send email, please try again later", {
        autoClose: 1000,
      });
    }
  }

  function handleClear() {
    setName("");
    setMessage("");
    setEmail("");
  }

  return (
    <div className="mt-20">
      <form
        className="flex flex-col items-center max-w-[400px] mx-auto gap-5"
        onSubmit={sendEmail}
      >
        <input
          name="username"
          placeholder="Your name"
          value={name}
          className="w-full px-3 py-2 border border-[#aaacae] rounded-lg outline-none"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          name="email"
          value={email}
          placeholder="Your email"
          className="w-full px-3 py-2 border border-[#aaacae] rounded-lg outline-none"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          value={message}
          required
          placeholder="Message"
          className="text resize-none w-full border border-[#aaacae] outline-none px-3 py-2 rounded-lg min-h-[400px] max-h-[600px] scrollbar-hide"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-8 py-1 rounded-md border border-[#aaacae] cursor-pointer active:bg-black"
            tabIndex={0}
          >
            Submit
          </button>
          <button
            className="px-8 py-1 rounded-md border border-[#aaacae] cursor-pointer active:bg-black"
            tabIndex={0}
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
