"use client";
import lineAnimation from "@utils/left_lines.json";
import Lottie from "lottie-react";

export default function LottieLines() {
   return (
      <div className="absolute flex justify-between top-1/3">
         <Lottie animationData={lineAnimation} loop={true} />
         <Lottie
            animationData={lineAnimation}
            className="transform rotate-180"
            loop={true}
         />
      </div>
   );
}
