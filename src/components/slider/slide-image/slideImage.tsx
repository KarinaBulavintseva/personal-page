type SlideImage = {
  src: string;
  alt: string;
};

export const SlideImage: React.FC<SlideImage> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="block mx-auto w-full max-h-75 md:max-h-88 object-contain"
    />
  );
};
