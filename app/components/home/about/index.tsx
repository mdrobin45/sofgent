import Button from "../../common/Button";
import SectionTag from "../../common/SectionTag";
import AboutCheckList from "./AboutCheckList";
import AboutThumbnail from "./AboutThumbnail";

const checkList = ["Transform & businesses","Unified product catalog","All-in-one SaaS solution","Wide largest companies"]
export default function About() {
   return (
      <section className="pt-28" id="home-one-about">
         <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px]">
            <div className="mx-auto theme-container">
               <div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
                  <AboutThumbnail />
                  <div className="about-article-area">
                     <SectionTag tag="About Company"/>
                     <h2 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-[50px] md:w-[80%] w-full xl:w-full">
                        Digital Transforming Brands, Elevating Reach Crafting
                        Success
                     </h2>
                     <p className="text-paragraph mb-[50px]">
                        Defined by digital dynamism, our digital marketing
                        agency emerges as a beacon of innovation and strategic
                        prowess.
                     </p>
                     <ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
                        {
                           checkList.map((check, index) => (
                              <AboutCheckList
                                 key={index}
                                 text={check}
                              />
                           ))
                        }
                     </ul>
                     <Button btnText="Learn More" href="/about" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
