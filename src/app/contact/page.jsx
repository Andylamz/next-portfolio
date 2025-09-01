import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";

function page() {
  return (
    <div className="xl:px-35 md:px-10 px-4 min-h-screen">
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default page;
