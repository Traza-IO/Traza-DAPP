// components/Accordion.tsx
import React, { useState, ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionChildProps {
  isOpen: boolean;
  toggleAccordion: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion border-b border-[#797f75]">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionChildProps>(child)) {
          return React.cloneElement(child, { isOpen, toggleAccordion });
        }
        return child;
      })}
    </div>
  );
};

export default Accordion;
