import aboutCardShape from "@assets/images/about/about-card-shape.webp";
import aboutRightImage from "@assets/images/about/about-right.webp";
import Image from "next/image";
import SectionTag from "../../common/SectionTag";

export default function AboutSofgent() {
   return (
      <section className="w-full py-16 md:py-[130px]">
         <div className="w-full mx-auto theme-container">
            <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0 h-fit">
               <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
                  <div className="">
                     <SectionTag tag="About Company" />
                     <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
                        Digital Transforming Brands, Elevating Reach Crafting
                        Success
                     </h1>
                     <p className="mt-5 md:mt-10 text-paragraph">
                        Defined by digital dynamism, our digital marketing
                        agency emerges as a beacon of innovation and strategic
                        prowess.
                     </p>
                     <hr className="mt-10 border-brand/10" />
                     <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-[50px] gap-8 md:gap-[70px]">
                        <div data-aos="fade-left" className="grid-cols-1">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                                 fill="#326d6d"
                              />
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                                 fill="white"
                              />
                           </svg>
                           <h1 className="mt-4 font-semibold text-18 text-main-black">
                              Expert Team Member
                           </h1>
                           <p className="mt-3 text-paragraph">
                              An SEO Optimization agency is company that
                              specializes
                           </p>
                        </div>
                        <div
                           data-aos="fade-left"
                           data-aos-delay="100"
                           className="grid-cols-1">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                                 fill="#326d6d"
                              />
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                                 fill="white"
                              />
                           </svg>
                           <h1 className="mt-4 font-semibold text-18 text-main-black">
                              Custom SEO Support
                           </h1>
                           <p className="mt-3 text-paragraph">
                              These agencies typically offer range of services
                              aimed
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Part */}
               <div className="relative flex flex-col items-center justify-end col-span-6 sm:flex-row">
                  <div>
                     <Image
                        width={550}
                        height={550}
                        src={aboutRightImage}
                        alt="img"
                        className="rounded-2xl"
                     />
                  </div>

                  <div className="bg-brand p-[30px] rounded-2xl sm:absolute z-20 bottom-8 w-[295px] left-8 mt-5 sm:mt-0 max-w-full">
                     <Image
                        width={100}
                        height={100}
                        src={aboutCardShape}
                        alt="About card shape"
                        className="absolute right-2 top-bottom-moving"
                     />
                     <div className="flex items-center gap-2.5">
                        <svg
                           width="11"
                           height="12"
                           viewBox="0 0 11 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                        <span className="text-sm leading-8 text-white">
                           We have
                        </span>
                     </div>
                     <h1
                        className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]"
                        data-scroll-qs="scroll"
                        data-count-qs="25"
                        data-type-qs="+ Years of Experience"
                        data-speed-qs="1000">
                        25+ Years of Experience
                     </h1>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
