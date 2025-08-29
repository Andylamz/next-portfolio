import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Andy YT Lam",
  description:
    "Explore my portfolio projects, where I apply React, Next.js, MongoDB, Express and Nodejs to create modern, user-friendly and effcient web applications.",
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
