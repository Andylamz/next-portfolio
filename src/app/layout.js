import "./globals.css";
import { Poppins } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Portfolio | Andy YT Lam",
  description: "This is Andy's portfolio built with Next.js",
  icons: {
    icon: "/favicon-96x96.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* #ea590b  #1d1d1d* #4b4b4b/}
      {/* xl:px-35 md:px-10 px-4 */}
      <body className={`bg-[#1d1d1d] ${poppins.className}`}>{children}</body>
    </html>
  );
}
