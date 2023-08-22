import { ContextProvider } from "@/context/GlobalState";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Life managment",
  description: "Track your economy with this website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-10 bg-slate-900 text-white h-screen`}
      >
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
