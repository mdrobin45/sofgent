import Link from "next/link";
import Button from "../../common/Button";
import Copyright from "./Copyright";
export default function FooterOne() {
   return (
      <footer>
         <div className="footer-one-wrapper w-full pt-[130px]">
            <div className="mx-auto theme-container">
               <div className="w-full">
                  <div className="w-full py-[80px] border-t border-[e7e3fa] grid xl:grid-cols-12 md:grid-cols-3 md:gap-10 grid-cols-2 gap-8">
                     <div className="xl:col-span-3">
                        <div className="w-full mb-10">
                           <p className="text-main-black text-18 font-semibold mb-[30px]">
                              Address
                           </p>
                           <p className="font-medium text-paragraph">
                              55 Street, 2nd block, 3rd Floor <br />
                              Melbourne, Australia
                           </p>
                        </div>
                        <div className="w-full">
                           <p className="text-main-black text-18 font-semibold mb-[30px]">
                              Contact
                           </p>
                           <p className="font-medium text-paragraph">
                              infoquland@gmail.com <br />
                              +880 456 852 99
                           </p>
                        </div>
                     </div>
                     <div className="xl:col-span-2">
                        <div className="w-full">
                           <p className="text-main-black text-18 font-semibold mb-[30px]">
                              Services
                           </p>
                           <ul className="flex flex-col space-y-2.5">
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/project-details">
                                    Keyword Research
                                 </Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/project-details">
                                    Email marketing
                                 </Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/project-details">
                                    Content marketing
                                 </Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/project-details">
                                    Web Development
                                 </Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/project-details">
                                    Social Marketing
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="xl:col-span-2">
                        <div className="w-full">
                           <p className="text-main-black text-18 font-semibold mb-[30px]">
                              Quick Link
                           </p>
                           <ul className="flex flex-col space-y-2.5">
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/contact">Help center</Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/blogs">Tutorials</Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/contact">Create a ticket </Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/teams">Meet Our Team</Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/faqs">FAQs</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="xl:col-span-2">
                        <div className="w-full">
                           <p className="text-main-black text-18 font-semibold mb-[30px]">
                              Company
                           </p>
                           <ul className="flex flex-col space-y-2.5">
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/about">About us</Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/projects">Careers</Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/blogs">News & Blog </Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/blog-details">Our Reviews</Link>
                              </li>
                              <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                                 <Link href="/contact">Contact Us</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-span-2 xl:col-span-3 md:col-span-1">
                        <div className="w-full mb-10">
                           <p className="text-main-black text-18 font-semibold mb-[30px]">
                              Newsletter
                           </p>
                           <p className="font-medium text-paragraph mb-[30px]">
                              Subscribe newsletter to get updates
                           </p>
                           <div className="mb-2.5">
                              <input
                                 placeholder="Email Address"
                                 className="placeholder:text-paragraph typewriter-input w-full h-[56px] bg-gray border border-[#e7e3fa] focus:border-brand focus:outline-none focus:right-0 rounded-full px-[25px]"
                                 type="text"
                              />
                           </div>

                           <Button
                              className="py-3 mt-4 inline-block"
                              btnText="Subscribe"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full bg-gradient-to-r from-brand to-gray md:h-[65px] h-10">
               <div className="h-full mx-auto theme-container">
                  <div className="flex items-center justify-between w-full h-full text-xs md:text-base">
                     <Copyright />
                     <div className="relative hidden md:block">
                        <a
                           href="#"
                           aria-label="go top"
                           className="w-[45px] h-[45px] rounded-full border-[3px] border-white flex justify-center items-center bg-brand absolute -top-[55px]">
                           <span>
                              <svg
                                 width="45"
                                 height="45"
                                 viewBox="0 0 45 45"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <circle
                                    cx="22.5"
                                    cy="22.5"
                                    r="21"
                                    fill="#326d6d"
                                    stroke="white"
                                    strokeWidth="3"
                                 />
                                 <path
                                    d="M19 21L23 17M23 17L27 21M23 17V29"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                           </span>
                        </a>
                     </div>
                     <ul className="items-center hidden md:space-x-6 md:flex">
                        <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                           <Link href="#">Privacy Policy</Link>
                        </li>
                        <li className="font-medium text-paragraph">|</li>
                        <li className="font-medium hover:text-brand hover:underline common-transition text-paragraph">
                           <a href="#">Terms & Conditions</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
