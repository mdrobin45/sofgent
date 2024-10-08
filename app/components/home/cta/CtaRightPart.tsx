"use client";
import ctaShape from "@assets/images/home/cta-bg-transparent.png";
import ctaImg1 from "@assets/images/home/cta-man.webp";
import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

export default function CtaRightPart() {
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
   );
}
