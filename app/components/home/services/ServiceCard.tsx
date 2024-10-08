interface ServiceCardPropsType {
   title: string;
   description: string;
   icon: React.FC;
}
const ServiceCard: React.FC<ServiceCardPropsType> = ({
   title,
   description,
   icon: Icon,
}) => {
   return (
      <div
         data-aos="zoom-in-left"
         className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-brand common-transition">
         <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray group-hover:bg-brand common-transition text-brand group-hover:text-white">
            <span>
               <Icon />
            </span>
         </div>
         <div>
            <p className="mb-4 font-semibold text-center text-20 text-main-black">
               {title}
            </p>
            <p className="text-center text-paragraph">{description}</p>
         </div>
      </div>
   );
};

export default ServiceCard;
