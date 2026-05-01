import type { MoodItem } from "../../types";

interface CardProps {
  item: MoodItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="aspect-3/4 max-w-60 overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
          <img
            src={item.image}
            alt={item.description}
            className="w-full h-full object-cover object-top hover:scale-104 transition-transform duration-500"
          />
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm font-medium">
            {item.emoji} {item.label}
          </p>
        </div>
      </div>
    </>
  );
};
