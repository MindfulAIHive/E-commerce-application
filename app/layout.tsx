import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { Poppins, Roboto } from "next/font/google";
import Topbar from "./components/topbar";
import Hero from "./components/hero";
import Productscard from "./components/productscard"



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const poppins = Poppins({


  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const roboto = Roboto({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['500']
})





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <Topbar />
        <Header />
        <Hero />

        <Productscard />
       
        {children}
 
      </body>
    </html>
  );
}
