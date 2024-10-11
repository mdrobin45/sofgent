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
                     <h2 className="flex gap-2.5">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="red" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"/></svg>
                        <span className="font-medium font-inter text-22 text-main-black">
                           support@sofgent.com
                        </span>
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
