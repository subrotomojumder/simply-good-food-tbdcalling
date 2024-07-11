import { cn } from "@/lib/utils";

type TSectionHeadingProps = {
  heading: string;
  des?: string;
  className?: string;
};

const SectionHeading = ({ heading, des, className }: TSectionHeadingProps) => {
  return (
    <div className={cn( "space-y-5 text-center py-5 text-[#3e3e3e]",className)}>
      <h3 className="text-2xl lg:text-4xl font-bold max-w-[15ch] lg:max-w-[20ch] mx-auto">{heading}</h3>
      <p className="text-xs lg:text-sm max-w-[100ch] mx-auto text-slate-500 px-4">{des}</p>
    </div>
  );
};

export default SectionHeading;
