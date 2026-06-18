import React, { useState, ReactNode } from 'react';
import { FaAngleDown } from 'react-icons/fa';
interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => (
  <div className="accordion-item">
    <div
      className="accordion-header p-4 border-b-[2px] cursor-pointer flex w-full justify-between items-center bg-[#fbfbfb]"
      onClick={onToggle}
    >
      <h3>{title}</h3>
      <FaAngleDown size={24} />
    </div>
    {isOpen && <div className="accordion-content p-4">{content}</div>}
  </div>
);

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion max-w-[1024px] mx-auto mt-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const Description: React.FC = () => {
  const items = [
    {
      title: 'Descripción',
      content: (
        <div data-bs-parent="#accordionExample3">
          <div>
            <h3> Polerón con capucha estampado </h3>
            <h5> « Colección Chavín de Huántar » </h5>
          </div>

          <p>
            Los polerones estampados de “Mestiza” representan gráficamente la
            inspiración en la iconografía textil andina.
          </p>

          <p>
            La colección Chavín de Huántar, esta inspirada en el primer ícono
            textil andino conocido como leitmotif andino y en el resto de
            américa se le conoce como grecas escalonadas.
          </p>

          <p>
            Los vestigios del primer ícono textil andino datan de 1500 a. C.
            encontrados en Chavín de Huántar, en la provincia de Wari, del
            departamento de Ancash - Perú.
          </p>

          <p>
            El leitmotiv compuesto de sus simbolos básicos, la ola (agua) y los
            andenes (tierra) muestra una expresion comprensible y tiene
            condiciones óptimas a la configuración artistica, especialmente en
            el campo textil.{' '}
          </p>
        </div>
      ),
    },
    {
      title: 'Información',
      content: <p>Contenido del acordeón con JSX y otros elementos.</p>,
    },
    {
      title: 'Materiales',
      content: (
        <img src="https://via.placeholder.com/150" alt="Ejemplo de imagen" />
      ),
    },
    {
      title: 'Materiales de Empaque',
      content: <p>Contenido del acordeón con JSX y otros elementos.</p>,
    },
    {
      title: 'Cuidado',
      content: <p>Contenido del acordeón con JSX y otros elementos.</p>,
    },
    {
      title: 'Consejos',
      content: <p>Contenido del acordeón con JSX y otros elementos.</p>,
    },
  ];

  return <Accordion items={items} />;
};

export default Description;
