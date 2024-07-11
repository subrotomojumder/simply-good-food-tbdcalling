import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-3 md:px-6 py-12", className)}>
      {children}
    </div>
  );
};

export default Container;
