import { useQueryCall } from '@ic-reactor/react';
import Accordion from '../components/Accordion/Accordion';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useState } from 'react';
import { backend } from '../declarations/backend';
import { useTraceabilityStore } from '../store/useTraceabilityStore';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { useGtinNavigation } from '../hooks/useGtinNavigation';

interface IitemTrace {
  title: string;
  location: string;
  ruc: string;
  coords: string;
}

interface ItiemLine {
  process: string;
  start_time: string;
  end_time: string;
  owner: string;
}

export const Traceability: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getCurrentGtin } = useGtinNavigation();
  const { data, isLoading, fetchData } = useTraceabilityStore();
  const gtin = getCurrentGtin() || '17751234567890';

  useEffect(() => {
    if (!data) {
      fetchData(gtin);
    }
  }, [data, fetchData, gtin]);

  return (
    <>
      {isLoading ? (
        <div className="max-w-[1024px] mx-auto mt-6 px-5">
          <div className="flex flex-col gap-2 w-full">
            <Skeleton count={1} height={60} width="100%" />
            <Skeleton count={1} height={60} width="100%" />
            <Skeleton count={1} height={60} width="100%" />
          </div>
        </div>
      ) : (
        <div className="max-w-[1024px] mx-auto mt-6 px-5">
          <Accordion>
            <AccordionHead toggleAccordion={() => {}} isOpen={false}>
              {t('product.suppliers')}
            </AccordionHead>
            <AccordionContent isOpen={false}>
              <>
                {data?.trace_supplier?.map(
                  (item: IitemTrace, index: number) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-[#45483D] text-[15px] mb-6 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1">
                          <FaMapMarkerAlt
                            color={'#5F6259'}
                            className="text-[28px]"
                          />
                        </div>
                        <div className="">
                          <h4 className="font-bold text-[#5F6259] text-[13px] m-0 dark:text-white">
                            {item.location}
                          </h4>
                          <p>
                            <span className="text-[13px] text-[#5F6259] font-bold dark:text-white">
                              RUC:{' '}
                            </span>
                            <span className="text-[13px] text-[#5F6259] dark:text-white">
                              {item.ruc}
                            </span>
                          </p>
                          <span className="text-[13px] text-[#5F6259] font-bold dark:text-white">
                            {t('product.location')}:{' '}
                          </span>
                          <span className="text-[13px] text-[#5F6259] dark:text-white">
                            {item.coords}
                          </span>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </>
            </AccordionContent>
          </Accordion>

          <Accordion>
            <AccordionHead toggleAccordion={() => {}} isOpen={false}>
              {t('product.manufacturing')}
            </AccordionHead>
            <AccordionContent isOpen={false}>
              <AccordionHead toggleAccordion={() => {}} isOpen={false}>
                {t('product.manufacturing')}
              </AccordionHead>
              <AccordionContent isOpen={false}>
                <div className="mb-6">
                  <h3 className="text-[#45483D] text-[15px] mb-6 dark:text-white">
                    {data?.location}
                  </h3>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <FaMapMarkerAlt
                        color={'#5F6259'}
                        className="text-[28px] dark:text-white"
                      />
                    </div>
                    <div className="">
                      <h4 className="font-bold text-[#5F6259] text-[17px] m-0 dark:text-white">
                        Localización
                      </h4>
                      <span className="text-[13px] text-[#5F6259] font-bold block dark:text-white">
                        Ubicación: {data?.traceability_batch?.location}
                      </span>
                      <p className="text-[13px] text-[#5F6259] dark:text-white">
                        Dirección, provincia, departamento, región {data?.traceability_batch?.location}
                      </p>
                    </div>
                  </div>
                  <ul>
                    {data?.traceability_batch?.time_line?.map((item: ItiemLine, index: number) => (
                      <li
                        key={index}
                        className="flex items-start w-full justify-start relative mt-4 pb-6"
                      >
                        <div className="pt-2 absolute top-0 bottom-0 pt-2 h-full flex flex-col h-full">
                          <span className="block w-[15px] h-[15px] rounded-full bg-[#acb2a8]"></span>
                          <span className="bg-[#CCD5DB] w-[3px] h-auto flex-1 block mx-auto mt-2"></span>
                        </div>
                        <div className="pl-10">
                          <h4 className="text-[20px] text-[#212529] dark:text-white font-[500] capitalize">
                            {item?.process}
                          </h4>
                          <div>
                            <strong className="text-[13px] text-[#5f6259] dark:text-white font-bold block">
                              {t('product.date_and_time_start')}:
                            </strong>
                            <span className="text-[#5f6259] text-[13px] dark:text-white block">
                              {' '}
                              {item?.start_time}
                            </span>
                          </div>
                          <div className="my-3">
                            <strong className="text-[13px] text-[#5f6259] dark:text-white font-bold block">
                              {t('product.date_and_time_end')}:
                            </strong>
                            <span className="text-[#5f6259] text-[13px] dark:text-white block">
                              {' '}
                              {item?.end_time}
                            </span>
                          </div>
                          <div>
                            <strong className="text-[13px] text-[#5f6259] dark:text-white font-bold">
                              {t('product.responsible')}:
                            </strong>
                            <span className="text-[#5f6259] text-[13px] dark:text-white">
                              {' '}
                              {item?.owner}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {data?.traceability_product?.time_line?.map((item: ItiemLine, index: number) => (
                      <li
                        key={index}
                        className="flex items-start w-full justify-start relative mt-4 pb-6"
                      >
                        <div className="pt-2 absolute top-0 bottom-0 pt-2 h-full flex flex-col h-full">
                          <span className="block w-[15px] h-[15px] rounded-full bg-[#acb2a8]"></span>
                          <span className="bg-[#CCD5DB] w-[3px] h-auto flex-1 block mx-auto mt-2"></span>
                        </div>
                        <div className="pl-10">
                          <h4 className="text-[20px] text-[#212529] dark:text-white font-[500] capitalize">
                            {item?.process}
                          </h4>
                          <div>
                            <strong className="text-[13px] text-[#5f6259] dark:text-white font-bold block">
                              {t('product.date_and_time_start')}:
                            </strong>
                            <span className="text-[#5f6259] text-[13px] dark:text-white block">
                              {' '}
                              {item?.start_time}
                            </span>
                          </div>
                          <div className="my-3">
                            <strong className="text-[13px] text-[#5f6259] dark:text-white font-bold block">
                              {t('product.date_and_time_end')}:
                            </strong>
                            <span className="text-[#5f6259] text-[13px] dark:text-white block">
                              {' '}
                              {item?.end_time}
                            </span>
                          </div>
                          <div>
                            <strong className="text-[13px] text-[#5f6259] dark:text-white font-bold">
                              {t('product.responsible')}:
                            </strong>
                            <span className="text-[#5f6259] text-[13px] dark:text-white">
                              {' '}
                              {item?.owner}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionContent>
          </Accordion>
        </div>
      )}
    </>
  );
};
