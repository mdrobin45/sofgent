import About from "@/app/components/home/about/About";
import FunFact from "@/app/components/home/funFact";
import Hero from "@components/home/hero";
import Service from "@components/home/services";

export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <FunFact />
         <Service/>
      </main>
   );
}
