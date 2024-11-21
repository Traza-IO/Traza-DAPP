// components/AccordionHead.tsx
import React, { ReactNode } from "react";
import { GoChevronDown } from "react-icons/go";

interface AccordionHeadProps {
  children: ReactNode;
  toggleAccordion: () => void;
  isOpen: boolean;
}

const AccordionHead: React.FC<AccordionHeadProps> = ({
  children,
  toggleAccordion,
  isOpen,
}) => {
  return (
    <div
      className="accordion-head p-4 cursor-pointer flex justify-between items-center hover:bg-gray-200"
      onClick={toggleAccordion}
    >
      <h3 className="text-[17px] font-bold text-[#45483d]">{children}</h3>
      <GoChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default AccordionHead;
