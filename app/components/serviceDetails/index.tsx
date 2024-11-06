import getServicesMeta from "@/app/utils/getServicesMeta";
import Markdown from "markdown-to-jsx";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import "./style.css";

export default function ServiceDetailsInfo({ slug }: { slug: string }) {
   const services = getServicesMeta("/app/data/services");
   const service = services.find((service) => service.slug === slug);

   return (
      <section className="pt-16 md:pt-[130px] service-details-page">
         <div className="w-full mx-auto theme-container">
            <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">
               <div data-aos="fade-up" className="col-span-8">
                  {service ? (
                     <Markdown>{service.content}</Markdown>
                  ) : (
                     <p>Loading service details...</p>
                  )}
               </div>
               <ServiceDetailsSidebar slug={slug} />
            </div>
            <hr className="bg-purple/10 mt-[120px]" />
         </div>
      </section>
   );
}
