import Footer from "@/components/Footer";

export const metadata = {
  title: "About Me | Andy YT Lam",
  description: "This is the about me page of Andy YT Lam",
  icons: {
    icon: "/favicon-96x96.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col text-[#cdcdcd]">
      {children}
      <Footer />
    </div>
  );
}
