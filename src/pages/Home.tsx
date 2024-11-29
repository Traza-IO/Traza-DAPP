import React, { useEffect } from 'react';
import Accordion from '../components/Accordion/Accordion';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import { FaChevronCircleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import { Information } from '../components/HomeComponents';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { data: data1, call: call1 } = useQueryCall({
    functionName: 'readProductDpp',
    args: ['wn165mo'],
  });

  const { data: data2, call: call2 } = useQueryCall({
    functionName: 'readModelId',
    args: ['tyu9i4a'],
  });

  const product = Array.isArray(data2) ? data2[0] : {};
  const information = Array.isArray(data1) ? data1[0] : {};
  console.log(data2, 'dasd2');
  console.log(data1, 'dasd1');

  return (
    <div className="max-w-[1024px] mx-auto mt-6 px-5">
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.description')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <div className="mb-4">
            <h3 className="text-[20px] mb-2 dark:text-white">
              {product?.description_model?.name}
            </h3>
            <h5 className="text-[15px] dark:text-white">
              {product?.description_model?.collection}
            </h5>
          </div>
          <p className="text-[14px] text-[#45483D] dark:text-white">
            {product?.description_model?.summary}
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.information')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.name')}
              </strong>
              <p className="text-right">{information?.information_product}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.brand')}
              </strong>
              <p className="text-right">
                {information?.traceability_blockchain_product}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.gtin')}
              </strong>
              <p className="text-right">{information?.gtin_product}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.product_code')}
              </strong>
              <p className="text-right">{information?.id_product}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.category')}
              </strong>
              <p className="text-right">{information?.information_product}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.size')}
              </strong>
              <p className="text-right">
                {information?.id_product_parent_company}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.color')}
              </strong>
              <p className="text-right">{information?.update_date}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.year')}
              </strong>
              <p className="text-right">{information?.creation_date}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.season')}
              </strong>
              <p className="text-right">{information?.state}</p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.materials')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.composition')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.materials?.composition}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.recycled')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.materials?.recycling}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.recycled_percentage')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.materials?.percentage_recycling}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.recycled_entry')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.materials?.recycling_income}
              </p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.package')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.type')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.packing?.packingdescriptiontype}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.weight')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.packing?.weight}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.volume')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.packing?.volume}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.recycling')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.packing?.recycling}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                {t('product.percentage_recycling')}:
              </strong>
              <p className="text-right dark:text-white">
                {product?.packing?.percentage_recycling}
              </p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.careful')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="text-[#45483D] mb-4 dark:text-white">
            {product?.care?.description}:
          </h5>
          <ul className="text-[14px] text-[#45483D] dark:text-white">
            {product?.care?.care.map((item: string, index: number) => (
              <li key={index} className="flex items-center mb-2">
                <FaChevronCircleRight />
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.tips')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="text-[#45483D] mb-4 dark:text-white">
            {product?.tips?.description}
          </h5>
          <ul className="text-[14px] text-[#45483D] dark:text-white">
            {product?.tips?.list.map((item: string, index: number) => (
              <li key={index} className="flex items-center mb-2">
                <FaChevronCircleRight />
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
          <br />
        </AccordionContent>
      </Accordion>
    </div>
  );
};

export default Home;
