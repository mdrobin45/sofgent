"use client";
import Lottie from "lottie-react";
import lineAnimation from "./left_lines.json";

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
