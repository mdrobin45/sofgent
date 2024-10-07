import Button from "../../common/Button";
import AboutThumbnail from "./AboutThumbnail";

export default function About() {
   return (
      <section className="pt-28" id="home-one-about">
         <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px]">
            <div className="mx-auto theme-container">
               <div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
                  <AboutThumbnail />
                  <div className="about-article-area">
                     <span className="mb-5 section-title-top-tag">
                        About Company
                     </span>
                     <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] md:w-[80%] w-full xl:w-full">
                        Digital Transforming Brands, Elevating Reach Crafting
                        Success
                     </h2>
                     <p className="text-paragraph mb-[50px]">
                        Defined by digital dynamism, our digital marketing
                        agency emerges as a beacon of innovation and strategic
                        prowess.
                     </p>
                     <ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
                        <li className="flex space-x-2.5 items-center text-brand font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                           <span>
                              <svg
                                 width="18"
                                 height="13"
                                 viewBox="0 0 18 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                                    fill="currentColor"
                                 />
                              </svg>
                           </span>
                           <span>Transform & businesses</span>
                        </li>
                        <li className="flex space-x-2.5 items-center text-brand font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                           <span>
                              <svg
                                 width="18"
                                 height="13"
                                 viewBox="0 0 18 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                                    fill="currentColor"
                                 />
                              </svg>
                           </span>
                           <span>Unified product catalog</span>
                        </li>
                        <li className="flex space-x-2.5 items-center text-brand font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                           <span>
                              <svg
                                 width="18"
                                 height="13"
                                 viewBox="0 0 18 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                                    fill="currentColor"
                                 />
                              </svg>
                           </span>
                           <span>All-in-one SaaS solution</span>
                        </li>
                        <li className="flex space-x-2.5 items-center text-brand font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                           <span>
                              <svg
                                 width="18"
                                 height="13"
                                 viewBox="0 0 18 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                                    fill="currentColor"
                                 />
                              </svg>
                           </span>
                           <span>Wide largest companies</span>
                        </li>
                     </ul>
                     <Button btnText="Learn More" href="/about" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
