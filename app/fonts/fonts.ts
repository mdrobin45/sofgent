import { Inter, Manrope } from "next/font/google";

export const manrope = Manrope({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});
export const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   weight: ["300", "400", "500", "600"],
});
