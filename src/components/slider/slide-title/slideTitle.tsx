type SlideTitleProps = {
  title: string;
};

export const SlideTitle: React.FC<SlideTitleProps> = ({ title }) => {
  return <div className="text-center mt-2">{title}</div>;
};
