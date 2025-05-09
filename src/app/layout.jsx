import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEAM FLOW",
  description: "TEAM TASK MANAGEMENT SYSTEM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          inter.className
        )}
      >
         <Providers>
          {" "}
          {/* ✅ Wrap children with Redux Provider */}
          <SideNavbar />
          <div className="p-10 w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
