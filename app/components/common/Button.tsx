import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface PropsType{
   className?: string;
   href?: string;
   btnText?: string;
}
 const Button:React.FC<PropsType> =({className,href,btnText})=>
    {
   return (
      <>
         <Link
            href={href?href:'#'}
            className={twMerge('rounded-full px-5 py-2.5 overflow-hidden group bg-brand relative hover:bg-gradient-to-r hover:from-[#5ca979] text-white transition-all ease-out duration-300',className)}>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">{btnText}</span>
         </Link>
      </>
   );
}

export default Button;