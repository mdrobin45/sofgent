import benefitsImage from "@assets/about/about-benefits.webp";
import Image from "next/image";
import SectionTag from "../../common/SectionTag";
import BenefitCard from "./BenefitCard";

// Benefits list
const benefitsList = [
   {
      title: "Customizable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
   {
      title: "Flexible",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
   {
      title: "Professional",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
   {
      title: "Innovative",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero vel ultricies tristique, felis risus semper justo, et luctus urna lectus non massa.",
   },
];
export default function AboutBenefit() {
   return (
      <section id="benefit" className="bg-gray">
         <div className="benefit-section-wrapper w-full py-16 md:py-[130px]">
            <div className="mx-auto theme-container">
               <div className="w-full">
                  <div className="flex flex-col items-center">
                     <SectionTag
                        className="bg-white border-brand border-1"
                        tag="Our Benefits"
                     />
                     <h2 className="text-24 sm:text-48 font-semibold text-main-black mb-[60px] text-center max-w-[653px]">
                        Digital Marketing Agency Can Provide Numerous Benefits
                     </h2>
                  </div>
               </div>
               <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-[70px]">
                  <div className="flex items-center justify-center col-span-6">
                     <Image
                        width={550}
                        height={600}
                        src={benefitsImage}
                        alt="About Benefits"
                        className="rounded-2xl"
                     />
                     <button
                        type="button"
                        aria-label="play-video"
                        className="absolute flex items-center space-x-8 video-play-btn ml-7 sm:ml-0">
                        <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                           <span>
                              <svg
                                 width="12"
                                 height="14"
                                 viewBox="0 0 12 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                                    fill="#794AFF"
                                 />
                              </svg>
                           </span>
                           <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                           <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                           <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                        </span>
                     </button>
                  </div>
                  <div className="flex items-center col-span-6">
                     <div className="grid grid-cols-3 sm:grid-cols-6 gap-[30px]">
                        {benefitsList.map((benefit, index) => (
                           <BenefitCard
                              key={index}
                              title={benefit.title}
                              text={benefit.text}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
