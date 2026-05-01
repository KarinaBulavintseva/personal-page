import { SlideTitle } from "../slide-title/slideTitle";
import { SlideImage } from "../slide-image/slideImage";

type SlideProps = {
  data: { url: string; title: string };
};

export const Slide: React.FC<SlideProps> = ({ data: { url, title } }) => {
  return (
    <div className="relative w-full shrink-0">
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
};
