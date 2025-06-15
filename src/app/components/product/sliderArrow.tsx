import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onClick: () => void;
  direction: "left" | "right";
}

export default function SliderArrow({ onClick, direction }: Props) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={`Go ${direction}`}
      className="w-8 h-8 flex justify-center items-center bg-white shadow-md rounded-full hover:bg-light"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
