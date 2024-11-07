import BreadCrumb from "@/app/components/common/BreadCrumb";
import ServiceDetailsInfo from "@/app/components/serviceDetails";
import { CtaNoSSR } from "@/app/page";
import getServicesMeta from "@/app/utils/getServicesMeta";

export async function generateStaticParams() {
   const services = getServicesMeta("/app/data/services");
   const paths = services.map((service) => ({ slug: service.slug }));
   return paths;
}

export default function ServiceDetail({
   params,
}: {
   params: { slug: string };
}) {
   const services = getServicesMeta("/app/data/services");
   const service = services.find((service) => service.slug === params.slug);
   return (
      <section>
         <BreadCrumb
            pageTitle={service?.title}
            currentPage="Services"
            to="/services"
         />
         <ServiceDetailsInfo slug={params.slug} />
         <CtaNoSSR />
      </section>
   );
}
