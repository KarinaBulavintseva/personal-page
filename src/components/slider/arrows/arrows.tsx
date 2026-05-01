import { useSlider } from "../../../hooks";
import {
  BsChevronCompactLeft as LeftArrow,
  BsChevronCompactRight as RightArrow,
} from "react-icons/bs";

export const Arrows = () => {
  const { changeSlide } = useSlider();

  return (
    <div className="absolute inset-0 flex items-center justify-between px-1">
      <button
        onClick={() => changeSlide(-1)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-overlay text-text-contrast backdrop-blur transition hover:bg-overlay-hover z-10 cursor-pointer"
      >
        <LeftArrow size={20} />
      </button>

      <button
        onClick={() => changeSlide(1)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-overlay text-white backdrop-blur transition hover:bg-overlay-hover z-10 cursor-pointer"
      >
        <RightArrow size={20} />
      </button>
    </div>
  );
};
