"use client";
import workProcess from "@assets/images/home/Process-amico.svg";
import Image from "next/image";
import ProcessCard from "./ProcessCard";
import SectionTag from "../../common/SectionTag";

const processList = [
   {
      serial: "01",
      title: "Discover & Analysis",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
   {
      serial: "02",
      title: "Strategy Development",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
   {
      serial: "03",
      title: "Launch & Execution",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
];
export default function WorkProcess() {
   return (
      <section id="working-process">
         <div className="working-process-section-wrapper w-full xl:pb-[130px] pb-[60px]">
            <div className="mx-auto theme-container">
               <div className="w-full grid-cols-12 xl:grid">
                  <div className="col-span-5">
                     <div className="title-area">
                        <SectionTag tag="Working Process"/>
                        <h2 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-[50px]">
                           Efficiency in Motion Navigating the Working Process
                        </h2>
                        <div
                           id="progress-wrapper"
                           className="grid grid-cols-1 gap-5 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                           {processList.map((process, index) => (
                              <ProcessCard
                                 key={index}
                                 title={process.title}
                                 description={process.description}
                                 serial={process.serial}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-span-7">
                     <div className="relative flex justify-center w-full h-full xl:justify-end">
                        <div className="right-0 h-full xl:absolute">
                           <div className="sticky top-[155px]">
                              <div id="progressThumbHeight">
                                 <Image
                                    width={500}
                                    height={500}
                                    src={workProcess}
                                    alt="Work Process Image"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
