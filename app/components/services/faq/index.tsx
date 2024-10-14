"use client";
import { useState } from "react";
import LottieLines from "../../common/LottieLine";

// Faq Items
const faqItems = [
   {
      question: "What services does Sofgent provide?",
      answer:
         "Sofgent specializes in custom software development, web and mobile app development, cloud solutions, and IT consulting services.",
   },
   {
      question: "How does Sofgent ensure project quality?",
      answer:
         "We follow industry best practices such as Agile methodology, continuous testing, and client feedback loops to ensure high-quality project delivery.",
   },
   {
      question: "Can Sofgent work with startups?",
      answer:
         "Yes, Sofgent has extensive experience working with startups, helping them develop scalable software solutions that grow with their business.",
   },
   {
      question: "What is the typical project timeline with Sofgent?",
      answer:
         "Project timelines vary based on scope and complexity, but we typically follow a structured approach that includes planning, development, testing, and deployment within 3 to 6 months.",
   },
   {
      question: "How can I get a quote for my project?",
      answer:
         "You can get a customized quote by contacting us through our website, providing your project details, and our team will get back to you within 24 hours.",
   },
];

export default function Faq() {
   const [activeFaq, setActiveFaq] = useState(0);

   const toggleFAQ = (index: number) => {
      setActiveFaq(activeFaq === index ? 0 : index);
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
                        {faqItems.map((faq, index) => (
                           <div
                              onClick={() => toggleFAQ(index)}
                              key={index}
                              className="py-2">
                              <h2>
                                 <button className="flex items-center justify-between w-full text-left font-semibold py-2">
                                    <span>{faq.question}</span>
                                    <svg
                                       className="fill-brand shrink-0 ml-8"
                                       width="16"
                                       height="16"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <rect
                                          y="7"
                                          width="16"
                                          height="2"
                                          rx="1"
                                          className={`transform origin-center transition duration-200 ease-out ${
                                             activeFaq === index &&
                                             "!rotate-180"
                                          }`}
                                       />
                                       <rect
                                          y="7"
                                          width="16"
                                          height="2"
                                          rx="1"
                                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                             activeFaq === index &&
                                             "!rotate-180"
                                          }`}
                                       />
                                    </svg>
                                 </button>
                              </h2>
                              <div
                                 id={`accordion-text-01`}
                                 role="region"
                                 aria-labelledby={`accordion-title-01`}
                                 className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeFaq === index
                                       ? "grid-rows-[1fr] opacity-100"
                                       : "grid-rows-[0fr] opacity-0"
                                 }`}>
                                 <div className="overflow-hidden">
                                    <p className="pb-3">{faq.answer}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <LottieLines classNames="top-32" />
      </section>
   );
}
