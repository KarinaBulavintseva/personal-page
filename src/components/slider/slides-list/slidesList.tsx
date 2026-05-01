import { useSlider } from "../../../hooks";
import { Slide } from "../slide/slide";

export const SlidesList = () => {
  const { slideNumber, items } = useSlider();

  return (
    <div
      className="flex h-full w-full will-change-transform transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
};
