import { cn } from "../../utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "m-[0_auto] w-full min-h-full max-w-7xl px-5 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
