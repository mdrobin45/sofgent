import About from "@/app/components/home/about/About";
import Hero from "@/app/components/home/Hero";
import FunFact from "@components/home/FunFact";

export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <FunFact/>
      </main>
   );
}
