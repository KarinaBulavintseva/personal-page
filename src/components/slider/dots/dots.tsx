import { Dot } from "../dot/dot";
import { useSlider } from "../../../hooks";

export const Dots = () => {
  const { slidesCount } = useSlider();

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }
    return dots;
  };

  return (
    <div className="flex justify-center py-2 relative z-20">{renderDots()}</div>
  );
};
