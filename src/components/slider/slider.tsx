import React, { useCallback, useEffect, useState } from "react";
import sliderData from "../../data/slider-data.json";
import { SliderContext } from "../../contexts/SliderContext";
import { type SliderItem } from "../../types";
import { Arrows } from "./arrows/arrows";
import { SlidesList } from "./slides-list/slidesList";
import { Dots } from "./dots/dots";

type SliderProps = {
  autoPlay?: boolean;
  autoPlayTime?: number;
  width?: string;
  height?: string;
};

export const Slider: React.FC<SliderProps> = ({
  width = "100%",
  height = "100%",
  autoPlay = false,
  autoPlayTime = 5000,
}) => {
  const [items] = useState<SliderItem[]>([...sliderData]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const changeSlide = useCallback(
    (direction = 1) => {
      setSlide((prev) => (prev + direction + items.length) % items.length);
    },
    [items.length],
  );

  const goToSlide = useCallback(
    (number: number) => {
      setSlide((number + items.length) % items.length);
    },
    [items.length],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayTime, changeSlide]);

  return (
    <div
      style={{ width, height }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <div className="relative w-full overflow-hidden">
          <Arrows />
          <SlidesList />
        </div>
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};
