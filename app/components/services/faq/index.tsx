"use client";
import { useState } from "react";
import LottieLines from "../../common/LottieLine";

const faqs = [
   {
      question: "What factors determine the pricing of SEO services?",
      answer:
         "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
   },
   {
      question: "What factors determine the pricing of SEO services?",
      answer:
         "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
   },
   {
      question: "What factors determine the pricing of SEO services?",
      answer:
         "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
   },
   {
      question: "What factors determine the pricing of SEO services?",
      answer:
         "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
   },
   // Add more FAQ items here if needed
];

export default function Faq() {
   const [activeFAQ, setActiveFAQ] = useState(0);

   const toggleFAQ = (index: number) => {
      setActiveFAQ(activeFAQ === index ? 0 : index);
   };
   return (
      <section className="relative mt-40" id="faq">
         <div className="w-full relative z-10">
            <div className="mx-auto theme-container">
               <div className="relative flex items-center justify-center px-4 py-10 overflow-hidden border md:px-0 md:py-20 rounded-3xl border-brandBorder bg-gray">
                  {/* <!-- animation circle  --> */}

                  <div className="absolute flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                     <div className="animated_circle bg-brand/10"></div>
                     <div className="animated_circle2 bg-brand/10"></div>
                     <div className="animated_circle3 bg-brand/10"></div>
                     <div className="animated_circle4 bg-brand/10"></div>
                  </div>
                  <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
                     <h1 className="py-0.5 px-5 bg-white border-brand border rounded-[30px] font-medium text-blue-seo">
                        FAQs
                     </h1>
                     <h2 className="mt-5 font-semibold text-24 sm:text-48">
                        Asked Questions & Answer
                     </h2>
                     
                     <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                        {faqs.map((faq, index) => (
                           <div
                              key={index}
                              className={`py-2.5 md:py-5 px-2 md:px-9 w-full bg-white rounded-[10px] h2-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit`}
                              onClick={() => toggleFAQ(index)}>
                              <div className="flex items-center justify-between w-full pointer-events-none h-fit">
                                 <h1 className="font-semibold sm:text-18 text-main-black">
                                    {faq.question}
                                 </h1>
                                 {
                                    activeFAQ === index?(<svg
                                    width="19"
                                    height="10"
                                    viewBox="0 0 19 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M2 2L9.5 8L17 2"
                                       stroke="#5D51F2"
                                       strokeWidth="3"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>):(<svg
                                    width="19"
                                    height="10"
                                    viewBox="0 0 19 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M2 2L9.5 8L17 2"
                                       stroke="#5D51F2"
                                       strokeWidth="3"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>)
                                 }
                                 
                              </div>
                              {activeFAQ === index && (
                                 <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                                    {faq.answer}
                                 </p>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <LottieLines classNames="top-32"/>
      </section>
      
   );
}
