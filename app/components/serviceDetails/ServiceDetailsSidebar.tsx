import { ServiceCatIcon, SupportIcon } from "@/app/utils/SVGIcons";
import Button from "../common/Button";
import sidebarBg from '@assets/images/services/service-details-sidebar-bg.webp'
import Image from "next/image";
import Link from "next/link";
import getServicesMeta from "@/app/utils/getServicesMeta";


export default function ServiceDetailsSidebar({ slug }: { slug: string }) {
   const services = getServicesMeta("/app/data/services");
   const filteredServices = services.filter((service) => service.slug !== slug);
   return (
      <div
         data-aos="fade-up"
         data-aos-delay="100"
         className="col-span-8 lg:col-span-4">
         <div className="border border-brand/10 rounded-2xl py-[30px] bg-main-gray">
            <div className="flex gap-5 items-center px-10 pb-[30px]">
               <ServiceCatIcon />
               <h2 className="font-semibold text-22 text-main-black">
                  More Services
               </h2>
            </div>
            <hr className="bg-brand/10" />
            <div className="pt-10 flex flex-col px-10 gap-[30px]">
               {filteredServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                     <div className="flex items-center gap-2 group text-gray-69 hover:text-brand">
                     <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           className="transition-all duration-300"
                           d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                     <p className="text-18 font-medium text-gray-69 font-inter leading-5 transition-colors duration-300 hover:text-brand">
                           {service.title}
                        </p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
         <div className="border border-brand/10 rounded-2xl py-[30px] bg-main-gray mt-[30px]">
            <div className="flex gap-5 items-center px-10 pb-[30px]">
               <SupportIcon />
               <h1 className="font-semibold text-22 text-main-black">
                  Get Consultation
               </h1>
            </div>
            <hr className="bg-brand/10" />
            <div className="pt-10 flex flex-col px-10 gap-[30px]">
               <input
                  placeholder="Full Name"
                  id="fullName"
                  type="text"
                  className="placeholder:text-paragraph w-full h-[56px] bg-white border border-brandBorder rounded-md focus:border-brand focus:outline-none focus:right-0 px-[25px]"
               />
               <input
                  placeholder="Enter your email..."
                  id="eOne"
                  type="text"
                  className="placeholder:text-paragraph w-full h-[56px] bg-white border border-brandBorder rounded-md focus:border-brand focus:outline-none focus:right-0 px-[25px]"
               />
               <textarea
                  placeholder="Your message..."
                  id="message"
                  className="placeholder:text-paragraph w-full bg-white border border-brandBorder rounded-md focus:border-brand focus:outline-none focus:right-0 px-[25px] py-5 h-[140px]"></textarea>
               <Button className="text-center" btnText="Get a Quote"/>
            </div>
         </div>
         <div className="mt-[30px] flex justify-center items-end relative w-full rounded-2xl overflow-hidden">
            <Image width={410}
               height={500}
               src={sidebarBg.src}
               alt="Service Bg"
               className="object-cover w-full"
            />
            <div className="absolute w-full h-full black_overlay"></div>
            <div className="w-full max-w-[277px] absolute bottom-[30px]">
               <h1 className="mb-5 font-semibold text-center text-white text-24">
                  Modern IT Design Consulting Services
               </h1>
               <Button btnText="+236 (456) 896 22" className="text-center w-full"/>
            </div>
         </div>
      </div>
   );
}
