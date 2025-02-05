import { CtaNoSSR } from "@/app/page";
import ProjectCard from "../common/ProjectCard";

export default function ProjectList() {
   return (
      <section className="w-full py-16 md:py-[130px]">
         <div className="w-full mx-auto theme-container">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[30px] gap-y-[80px]">
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
            </div>
         </div>
         <div className="mt-32">
            <CtaNoSSR />
            </div>
      </section>
   );
}
