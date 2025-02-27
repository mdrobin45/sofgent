import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
