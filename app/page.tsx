import About from "@/app/components/home/about";
import FunFact from "@/app/components/home/funFact";
import Hero from "@components/home/hero";
import WorkProcess from "@components/home/workProcess";
import dynamic from "next/dynamic";

export const CtaNoSSR = dynamic(() => import("@components/home/cta"), {
   ssr: false,
});
const ServiceNoSSR = dynamic(() => import("@components/home/services"), {
   ssr: false,
});
export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <FunFact />
         <ServiceNoSSR />
         <WorkProcess />
         <CtaNoSSR />
      </main>
   );
}
