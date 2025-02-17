import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import Image from "next/image";

function ProjectDetails() {
   const projectImages = [
      {
         url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
         title: "Dashboard Overview",
      },
      {
         url: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&q=80",
         title: "Analytics View",
      },
      {
         url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
         title: "Data Visualization",
      },
   ];

   return (
      <section>
         <BreadCrumb
            pageTitle="Project Details"
            currentPage="Projects Details"
            to="/projects"
         />
         <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6">
            {/* Project Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Project Overview</h2>
                  <Button
                     btnText="Live Preview"
                     external={true}
                     href="www.google.com"
                  />
               </div>
               <p className="text-gray-600 leading-relaxed">
                  A modern analytics dashboard built with React and TypeScript,
                  featuring real-time data visualization, customizable widgets,
                  and advanced filtering capabilities. The dashboard helps
                  businesses track KPIs, analyze trends, and make data-driven
                  decisions through an intuitive and responsive interface.
               </p>
            </div>

            {/* Project Images */}
            <div className="space-y-12">
               {projectImages.map((image, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-xl shadow-sm overflow-hidden">
                     <Image
                        width={600}
                        height={500}
                        src={image.url}
                        alt={image.title}
                        className="w-full h-[400px] object-cover"
                     />
                     <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                           {image.title}
                        </h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default ProjectDetails;
