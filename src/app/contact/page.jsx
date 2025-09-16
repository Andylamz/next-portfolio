import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import Social from "@/components/Social";

function page() {
  return (
    <div className="xl:px-35 md:px-10 px-4 min-h-screen">
      <ContactHeader />
      <Social />
      <ContactForm />
    </div>
  );
}

export default page;
