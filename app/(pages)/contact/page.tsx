import BreadCrumb from "@/app/components/common/BreadCrumb";
import ContactForm from "@/app/components/contact";
import ContactMap from "@/app/components/contact/ContactMap";
import Cta from "@/app/components/home/cta";

export default function Contact() {
   return (
      <section>
         <BreadCrumb pageTitle="Contact" currentPage="Contact" to="/" />
         <ContactForm />
         <ContactMap />
         <Cta className="mt-20"/>
      </section>
   );
}