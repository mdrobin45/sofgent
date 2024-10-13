import { BiEnvelope, BiPhone } from "react-icons/bi";
import Button from "../common/Button";
import SocialFollow from "./SocialFollow";

export default function ContactForm() {
   return (
      <section className="py-16 md:py-[130px]">
         <div className="theme-container w-full mx-auto grid grid-cols-7 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
            {/* <!-- address start  --> */}
            <div className="col-span-7 lg:col-span-5">
               <h1 className="font-semibold text-main-black text-[35px]">
                  Contact Us
               </h1>
               <p className="text-paragraph mt-[30px]">
                  We peel back the layers uncertainty, uncovering hidden truths
                  that lie beneath the surface of our reality.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-[70px] mt-10">
                  <div className="col-span-1">
                     <h2 className="flex gap-2.5 items-center">
                        <BiEnvelope className="text-2xl text-brand"/> <a href="mailto:support@sofgent.com">support@sofgent.com</a>
                     </h2>
                  </div>
                  <div className="col-span-1">
                     <h2 className="flex gap-2.5 items-center">
                        <BiPhone className="text-2xl text-brand"/> <a href="tel:0123456789">0123456789</a>
                     </h2>
                  </div>
               </div>
               <hr className="border-brand/10 mt-11 mb-[50px]" />
               <SocialFollow />
            </div>

            {/* <!-- contact form start --> */}
            <div className="col-span-7">
               <div className="border border-brand/10 bg-gray rounded-[10px] p-4 md:p-[50px]">
                  <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-6">
                     Send Us Message
                  </h1>
                  <p className="text-paragraph mb-[30px]">
                     Your email address will not be published. Required fields
                     are marked *
                  </p>
                  <form
                     action=""
                     className="grid grid-cols-6 md:grid-cols-12 gap-[30px]">
                     <input
                        type="text"
                        placeholder="Full Name"
                        className="col-span-6 h-[30px] focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        className="col-span-6 h-[30px] focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     <input
                        type="text"
                        placeholder="Phone Number"
                        className="col-span-6 h-[30px] focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     <input
                        type="email"
                        placeholder="Subject"
                        className="col-span-6 h-[30px] focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     <textarea
                        name=""
                        placeholder="Comments"
                        className="col-span-6 md:col-span-12 focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent h-[83px]"></textarea>

                     <div className="col-span-6 md:col-span-12">
                        <Button btnText="Send Message" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
