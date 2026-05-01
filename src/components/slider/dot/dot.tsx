import { useSlider } from "../../../hooks";
import { cn } from "../../../utils";

type DotProps = {
  number: number;
};

export const Dot: React.FC<DotProps> = ({ number }) => {
  const { goToSlide, slideNumber } = useSlider();

  return (
    <div
      className={cn(
        "w-2.5 h-2.5 rounded-full m-2 cursor-pointer transition-colors duration-300",
        slideNumber === number ? "bg-primary" : "bg-bg-surface",
      )}
      onClick={() => goToSlide(number)}
    />
  );
};
