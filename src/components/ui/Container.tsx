import { cn } from "@/lib/cn";
import { TContainer } from "@/types";




const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("px-[20px] w-full max-w-[1230px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
