import AboutBenefit from "@/app/components/about/aboutBenefits";
import AboutSofgent from "@/app/components/about/aboutSofGent";
import AboutFunFact from "@/app/components/about/funFact";
import AboutTeam from "@/app/components/about/teamMembers";
import BreadCrumb from "@components/common/BreadCrumb";

export default function About() {
   return (
      <div>
         <BreadCrumb pageTitle="About" currentPage="About" to="/" />
         <AboutSofgent />
         <AboutFunFact />
         <AboutBenefit />
         <AboutTeam/>
      </div>
   );
}