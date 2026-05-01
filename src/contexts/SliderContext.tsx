import { createContext } from "react";
import { type SliderItem } from "../types";

type initialState = {
  goToSlide: (n: number) => void;
  changeSlide: (direction: number) => void;
  slidesCount: number;
  slideNumber: number;
  items: SliderItem[];
};

export const SliderContext = createContext<initialState | null>(null);
