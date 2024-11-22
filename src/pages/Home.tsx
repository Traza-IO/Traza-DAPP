import React, { useEffect } from 'react';
import Accordion from '../components/Accordion/Accordion';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import { FaChevronCircleRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="max-w-[1024px] mx-auto mt-6 px-5">
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t("product.description")}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <div className="mb-4">
            <h3 className="text-[20px] mb-2">
              Polerón con capucha estampado
            </h3>
            <h5 className="text-[15px]"> « Colección Chavín de Huántar » </h5>
          </div>
          <p className="text-[14px] text-[#45483D]">
            Los polerones estampados de “Mestiza” representan gráficamente la
            inspiración en la iconografía textil andina.
          </p>
          <p className="text-[14px] text-[#45483D]">
            La colección Chavín de Huántar, esta inspirada en el primer ícono
            textil andino conocido como leitmotif andino y en el resto de
            américa se le conoce como grecas escalonadas.
          </p>
          <p className="text-[14px] text-[#45483D]">
            Los vestigios del primer ícono textil andino datan de 1500 a. C.
            encontrados en Chavín de Huántar, en la provincia de Wari, del
            departamento de Ancash - Perú.
          </p>
          <p className="text-[14px] text-[#45483D]">
            El leitmotiv compuesto de sus simbolos básicos, la ola (agua) y
            los andenes (tierra) muestra una expresion comprensible y tiene
            condiciones óptimas a la configuración artistica, especialmente en
            el campo textil.{" "}
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t("product.information")}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Nombre:</strong>
              <p className="text-right">
                Polerón con capucha estampado “Colección Chavin de Huantar”
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Marca:</strong>
              <p className="text-right">MESTIZA</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">GTIN:</strong>
              <p className="text-right">17751234567890</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Código de Producto:</strong>
              <p className="text-right">000000001</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Categoría:</strong>
              <p className="text-right">Ropa de Hombre</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Talla:</strong>
              <p className="text-right">Mediano</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Color:</strong>
              <p className="text-right">Blanco Natural</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Año:</strong>
              <p className="text-right">2024</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Estación:</strong>
              <p className="text-right">Otoño / Invierno</p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t("product.materials")}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Composición:</strong>
              <p className="text-right">100% algodón tangüis</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">Reciclado:</strong>
              <p className="text-right">No</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">% Reciclado:</strong>
              <p className="text-right">0%</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px]">
              <strong className="text-[#45483D]">
                Ingreso de Reciclado:
              </strong>
              <p className="text-right">Algodón Orgánico GOTS</p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t("product.package")}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <p className="text-[14px] text-[#45483D]">
            Bolsa, la cual está hecha de material reciclado y se puede
            reciclar si el usuario decide no conservarlo.
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t("product.careful")}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="text-[#45483D] mb-4">Consejos para la Reventa:</h5>
          <ul className="text-[14px] text-[#45483D]">
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Emplea detergentes suaves</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">No utilices agua caliente</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Lava las prendas del reves</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Evita la secadora</span>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t("product.tips")}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="text-[#45483D] mb-4">Consejos para la Reventa:</h5>
          <ul className="text-[14px] text-[#45483D]">
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Prenda en buen estado</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Limpieza y cuidado</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Fotografías de calidad</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Precio justo</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Promoción en línea</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Descripciones detalladas</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Ofertas y descuentos</span>
            </li>
          </ul>
          <br />
          <h5 className="text-[#45483D] mb-4">Desecho Responsable:</h5>
          <ul className="text-[14px] text-[#45483D]">
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Reciclaje de textiles</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Donaciones</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Reutilización creativa</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Programas de recompra</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Puntos de recolección de ropa</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Educación sobre sostenibilidad</span>
            </li>
            <li className="flex items-center mb-2">
              <FaChevronCircleRight />
              <span className="ml-3">Compostaje textil</span>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
    </div>
  );
};

export default Home;
