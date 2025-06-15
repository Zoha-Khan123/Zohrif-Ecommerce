import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  onClick: () => void;
  direction: "left" | "right";
}

export default function SliderArrow({ onClick, direction }: Props) {
  const Icon = direction === "left" ? IoIosArrowRoundBack   : IoIosArrowRoundForward;
  return (
    <button
      onClick={onClick}
      aria-label={`Go ${direction}`}
      className="p-2 sm:p-3 bg-white shadow-md rounded-full hover:bg-light"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
