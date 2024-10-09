const SectionTag: React.FC<{ tag: string }> = ({ tag }) => {
   return (
      <>
         <span className="mb-5 p-2 bg-gray text-center text-brand rounded-full">
            {tag}
         </span>
      </>
   );
};

export default SectionTag;
