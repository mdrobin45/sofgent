import type { Metadata } from "next";
import { inter, manrope } from "./fonts/fonts";
import "./globals.css";

// Meta title & description
export const metadata: Metadata = {
   title: "SofGent",
   description: "Software IT Company",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${manrope.className} ${inter.variable}`}>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
         </body>
      </html>
   );
}
