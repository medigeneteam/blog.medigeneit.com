import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Blog - Medigene IT",
  description: "Blog by Medigene IT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={
          spaceGrotesk.className +
          " " +
          "bg-white text-black antialiased dark:bg-gray-950 dark:text-white"
        }
      >
        <div className="flex h-screen flex-col justify-between font-sans">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
