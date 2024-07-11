import { cn } from "@/lib/utils";

type TSectionHeadingProps = {
  heading: string;
  des?: string;
  className?: string;
};

const SectionHeading = ({ heading, des, className }: TSectionHeadingProps) => {
  return (
    <div className={cn( "space-y-2 text-center py-5 text-[#3e3e3e]",className)}>
      <h3 className="text-3xl lg:text-4xl font-bold ">{heading}</h3>
      <span className="text-sm ">{des}</span>
    </div>
  );
};

export default SectionHeading;
