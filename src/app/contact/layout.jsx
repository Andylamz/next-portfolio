import HomeBtn from "@/components/HomeBtn";
import { ToastContainer, toast } from "react-toastify";
export const metadata = {
  title: "Contact Me | Andy YT Lam",
  description:
    "Feel free to reach out for work opportunities, collaborations, or just to say hello",
  icons: {
    icon: "/favicon-96x96.png",
  },
};

export default function Layout({ children }) {
  return (
    <div className="flex flex-col text-[#cdcdcd]">
      <HomeBtn />
      {children}
      <ToastContainer />
    </div>
  );
}
