import BreadCrumb from "@/app/components/common/BreadCrumb";
import AboutService from "@/app/components/services/aboutService";
import Faq from "@/app/components/services/faq";
import ServiceMain from "@/app/components/services/mainServices";

export default function Services() {
   return (
      <section>
         <BreadCrumb pageTitle="Services" currentPage="Services" to="/" />
         <AboutService />
         <ServiceMain />
         <Faq/>
      </section>
   );
}
