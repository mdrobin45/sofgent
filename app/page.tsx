import About from "@/app/components/home/about/About";
import FunFact from "@/app/components/home/funFact";
import Cta from "@components/home/cta";
import Hero from "@components/home/hero";
import Service from "@components/home/services";
import WorkProcess from "@components/home/workProcess";

export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <FunFact />
         <Service />
         <WorkProcess />
         <Cta />
      </main>
   );
}
