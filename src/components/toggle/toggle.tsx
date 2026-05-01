import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

type ToggleProps = {
  isChecked: boolean;
  handleChange: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({ isChecked, handleChange }) => {
  return (
    <div className="relative inline-block">
      <input
        type="checkbox"
        id="checkbox"
        className="absolute opacity-0"
        onChange={handleChange}
        checked={isChecked}
        aria-label="toggle theme mode"
        role="switch"
      ></input>
      <label
        htmlFor="checkbox"
        className="
          flex items-center justify-between
          w-[50px] h-[26px] p-[5px]
          rounded-full cursor-pointer
          transition-colors duration-300
           shadow-[inset_0px_2px_4px_rgba(0,0,0,0.1)] 
        "
        style={{ backgroundColor: "var(--color-bg-surface)" }}
      >
        <IoSunnyOutline className="w-4 h-4" aria-hidden="true" />
        <IoIosMoon className="w-4 h-4" aria-hidden="true" />
        <div
          className={`absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full transition-transform duration-300  bg-primary`}
          style={{
            transform: isChecked ? "translateX(24px)" : "translateX(0)",
          }}
        ></div>
      </label>
    </div>
  );
};
