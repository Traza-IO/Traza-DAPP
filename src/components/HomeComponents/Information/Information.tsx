import { useTranslation } from 'react-i18next';
import Accordion from '../../Accordion/Accordion';
import AccordionContent from '../../Accordion/components/AccordionContent';
import AccordionHead from '../../Accordion/components/AccordionHead';
import { useQueryCall } from '@ic-reactor/react';

const Information = () => {
  const { t, i18n } = useTranslation();

  // const { data, call } = useQueryCall({
  //   functionName: 'readModelId',
  //   args: ['b7xn40g'],
  // });

  // console.log(data, 'data info');
  return (
    <Accordion>
      <AccordionHead toggleAccordion={() => {}} isOpen={false}>
        {t('product.information')}
      </AccordionHead>
      <AccordionContent isOpen={false}>
        <ul>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">Nombre:</strong>
            <p className="text-right">
              Polerón con capucha estampado “Colección Chavin de Huantar”
            </p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">Marca:</strong>
            <p className="text-right">MESTIZA</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">GTIN:</strong>
            <p className="text-right">17550123456789</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">
              Código de Producto:
            </strong>
            <p className="text-right">000000001</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">
              Categoría:
            </strong>
            <p className="text-right">Ropa de Hombre</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">Talla:</strong>
            <p className="text-right">Mediano</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">Color:</strong>
            <p className="text-right">Blanco Natural</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">Año:</strong>
            <p className="text-right">2024</p>
          </li>
          <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
            <strong className="text-[#45483D] dark:text-white">
              Estación:
            </strong>
            <p className="text-right">Otoño / Invierno</p>
          </li>
        </ul>
      </AccordionContent>
    </Accordion>
  );
};

export default Information;
