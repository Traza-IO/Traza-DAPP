import React, { useEffect,useState } from 'react';
import Accordion from '../components/Accordion/Accordion';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import { FaChevronCircleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// import  {backend}  from '../declarations/backend';
import { useTraceabilityStore } from '../store/useTraceabilityStore';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';

// type Ttips = {
//   description: string;
//   list: string[];
// };

// interface ProductData {
//   description_model?: any;
//   information_product?: any;
//   materials?: any;
//   packing?: any;
//   care?: any;
//   tips?: Ttips[];
// }

const  Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const { data, isLoading, fetchData } = useTraceabilityStore();

  const [searchParams] = useSearchParams();
  // const gtin = searchParams.get('gtin');
  const gtin = '17751234567890';

  useEffect(() => {
    console.log(gtin, 'gtin value');
    if (gtin && !data) {
      fetchData(gtin);
    }
  }, [gtin, data, fetchData]);


  return (
    <div className="max-w-[1024px] mx-auto mt-6 px-5">
      {isLoading ? (
        <div className="flex flex-col gap-2 w-full">
          <Skeleton count={1} height={60} width="100%" />
          <Skeleton count={1} height={60} width="100%" />
          <Skeleton count={1} height={60} width="100%" />
          <Skeleton count={1} height={60} width="100%" />
          <Skeleton count={1} height={60} width="100%" />
        </div>
      ) : (
        <>
        <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            {t('product.description')}
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <div className="mb-4">
              <h3 className="text-[20px] mb-2 dark:text-white">
                {data?.description_model?.name}
              </h3>
              <h5 className="text-[15px] dark:text-white">
                {data?.description_model?.collection}
              </h5>
            </div>
            <p className="text-[14px] text-[#45483D] dark:text-white">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.description_model?.summary,
                }}
              />
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
                <p className="text-right dark:text-white">
                  {data?.information_product?.name}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.brand')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.brand}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.gtin')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.GTIN}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.product_code')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.productcode}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.category')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.category}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.size')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.size}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.color')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.color}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.year')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.year}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.season')}
                </strong>
                <p className="text-right dark:text-white">
                  {data?.information_product?.season}
                </p>
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
                  {data?.materials?.composition}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.recycled')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.materials?.recycling ? 'Yes' : 'No'}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.recycled_percentage')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.materials?.percentage_recycling}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.recycled_entry')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.materials?.recycling_income}
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
                  {data?.packing?.packingdescriptiontype}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.weight')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.packing?.weight}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.volume')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.packing?.volume}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.recycling')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.packing?.recycling ? 'Yes' : 'No'}
                </p>
              </li>
              <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
                <strong className="text-[#45483D] dark:text-white">
                  {t('product.percentage_recycling')}:
                </strong>
                <p className="text-right dark:text-white">
                  {data?.packing?.percentage_recycling}
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
              {data?.care?.description}:
            </h5>
            <ul className="text-[14px] text-[#45483D] dark:text-white">
              {data?.care?.care?.map((item: string, index: number) => (
                <li key={index} className="flex items-center mb-2">
                  <FaChevronCircleRight />
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </Accordion>
        {/* <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            {t('product.tips')}
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <ul className="text-[14px] text-[#45483D] dark:text-white">
              {data?.tips?.map((item: Ttips, index: number) => (
                <li key={index}>
                  <h5 className="text-[#45483D] mt-6 mb-4 dark:text-white">
                    {item?.description}
                  </h5>
                  {item?.list?.map((i: string, index: number) => (
                    <p key={index} className="flex items-center mb-2">
                      <FaChevronCircleRight />
                      <span className="ml-3">{i}</span>
                    </p>
                  ))}
                </li>
              ))}
            </ul>
            <br />
          </AccordionContent>
        </Accordion> */}
        </> 
      )}
    </div>
  );
};

export default Home;
