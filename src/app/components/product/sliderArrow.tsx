import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { KeenSliderInstance } from "keen-slider/react";

interface ArrowProps {
  onClick: () => void;
  direction: "left" | "right";
}

function SliderArrow({ onClick, direction }: ArrowProps) {
  const Icon = direction === "left" ? IoIosArrowRoundBack : IoIosArrowRoundForward;

  return (
    <button
      onClick={onClick}
      aria-label={`Go ${direction}`}
      className="p-2 sm:p-3 bg-white shadow-md rounded-full hover:bg-light cursor-pointer"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

interface ArrowsGroupProps {
  instanceRef: React.RefObject<KeenSliderInstance | null>;
  className?: string;
}

export default function SliderArrows({ instanceRef, className = "" }: ArrowsGroupProps) {
  return (
    <div className={`space-x-2 hidden sm:block ${className}`}>
      <SliderArrow direction="left" onClick={() => instanceRef.current?.prev()} />
      <SliderArrow direction="right" onClick={() => instanceRef.current?.next()} />
    </div>
  );
}
