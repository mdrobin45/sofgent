import BreadCrumb from "@/app/components/common/BreadCrumb";
import ContactForm from "@/app/components/contact";
import ContactMap from "@/app/components/contact/ContactMap";

export default function Contact() {
   return (
      <section>
         <BreadCrumb pageTitle="Contact" currentPage="Contact" to="/" />
         <ContactForm />
         <ContactMap />
      </section>
   );
}