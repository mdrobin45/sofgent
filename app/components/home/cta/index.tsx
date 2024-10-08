"use client";
import ctaShape from "@assets/images/home/cta-bg-transparent.png";
import dotShape from "@assets/images/home/cta-dot-shape.webp";
import ctaImg1 from "@assets/images/home/cta-man.webp";
import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import Button from "../../common/Button";
import LottieLines from "../../common/LottieLine";

export default function Cta() {
   const sceneRef = useRef(null);

   useEffect(() => {
      if (sceneRef.current) {
         const parallaxInstance = new Parallax(sceneRef.current);
         // Cleanup the parallax instance on component unmount
         return () => {
            parallaxInstance.disable();
         };
      }
   }, []);
   return (
      <section data-aos="fade-up" id="consultation">
         <div className="relative w-full consultation-section-wrapper">
            <div className="relative z-10 mx-auto theme-container">
               <div className="w-full bg-gray py-[80px] justify-between xl:pl-[110px] pl-10 border border-brand rounded-[20px] bg-main-gray md:flex relative">
                  <div className="absolute bottom-0 left-0 pointer-events-none">
                     <Image
                        width={400}
                        height={400}
                        src={dotShape}
                        alt="CTA Dot Shape"
                     />
                  </div>
                  <div className="md:w-2/4 w-full">
                     <span className="mb-5 section-title-top-tag">
                        Get Consultations
                     </span>
                     <h2 className="md:text-48 mt-6 text-34 font-semibold mb-[32px]">
                        Get your free digital marketing audit
                     </h2>
                     <p className="text-paragraph mb-[45px]">
                        We’ve 25+ years of experience in digital marketing
                     </p>

                     <Button btnText="Get Consultation" href="/contact" />
                  </div>
                  <div className="w-2/4">
                     <div
                        ref={sceneRef}
                        id="consaltaion-mouse-move-anim"
                        className="relative justify-end w-full">
                        <div className="mr-10 moving-h2-hero-main-img">
                           <Image
                              className="ml-auto"
                              width={300}
                              height={300}
                              src={ctaShape}
                              alt="CTA BG Shape"
                           />
                        </div>
                        <div data-depth="0.40">
                           <Image
                              className="rounded-full"
                              width={500}
                              height={500}
                              src={ctaImg1}
                              alt="CTA Man Image"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <LottieLines classNames="top-20" />
         </div>
      </section>
   );
}
