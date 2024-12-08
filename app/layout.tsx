

import "./globals.css";
import Header from "./components/header";
import {  Roboto } from "next/font/google";
import Topbar from "./components/topbar";
import Hero from "./components/hero";




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
      <body className={roboto.className}>

        <Topbar />
        <Header />
        <Hero />

       
        {children}
 
      </body>
    </html>
  );
}
