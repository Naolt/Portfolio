import React from "react";

interface ChipProps {
  text: string;
  outlined?: boolean;
  small?: boolean;
}

const Chip: React.FC<ChipProps> = ({ text = "default", outlined = true }) => {
  const chipClasses = `px-4 py-2 flex w-fit justify-center items-center font-Montserrat font-medium uppercase text-Secondary-Color rounded-md ${
    outlined == true
      ? "border-solid border-2 border-Secondary-Color hover:bg-Secondary-Color/[0.2]"
      : "bg-Secondary-Color text-Text-Color"
  }`;

  return <div className={chipClasses}>{text}</div>;
};

export default Chip;
