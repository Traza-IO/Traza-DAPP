// components/AccordionContent.tsx
import React, { ReactNode } from "react";

interface AccordionContentProps {
  children: ReactNode;
  isOpen: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
}) => {
  return (
    <div
      className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
        isOpen ? "max-h-[100000000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="p-4">{children}</div>
    </div>
  );
};

export default AccordionContent;
