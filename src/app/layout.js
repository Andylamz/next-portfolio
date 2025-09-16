import "./globals.css";
import { Poppins } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import LiquidEther from "@/components/LiquidEther";

library.add(fas, far, fab);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Portfolio | Andy YT Lam",
  description: "This is Andy's portfolio built with Next.js",
  // icons: {
  //   icon: [{ url: "/favicon-96x96.png", type: "image/png", size: "96x96" }],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* #ea590b  #1d1d1d #4b4b4b/}
      {/* xl:px-35 md:px-10 px-4 */}
      <body className={`bg-[#1d1d1d] text-[#3dbcf7] ${poppins.className}`}>
        <div className="fixed w-full h-full inset-0 max-md:hidden">
          <LiquidEther
            colors={["#5227FF", "#3dbcf7", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="absolute inset-0">{children}</div>
      </body>
    </html>
  );
}
