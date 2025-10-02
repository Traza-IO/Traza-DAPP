import { MdOutlineContentCopy } from 'react-icons/md';
import icp from '../assets/icp.png';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

import { backend } from '../declarations/backend';
import { useEffect, useState } from 'react';
import { useTraceabilityStore } from '../store/useTraceabilityStore';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
type TtraceabilityItem = {
  hash_end: string;
  hash_start: string;
  label_end: string;
  label_start: string;
  process: string;
};
const Blockchain = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  // const gtin = searchParams.get('gtin');
  const gtin = '17550123456789';
  const { data, isLoading, fetchData } = useTraceabilityStore();

  useEffect(() => {
    if (gtin) {
      fetchData(gtin);
    }
  }, [gtin]);

  return (
    <div className="max-w-[1024px] mx-auto mt-8 px-5">
      {isLoading ? (
        <div className="flex flex-col gap-2 w-full">
          <Skeleton count={1} height={60} width="100%" />
          <Skeleton count={1} height={60} width="100%" />
        </div>
      ) : (
        <>
          <figure className="flex items-center justify-center max-w-[220px] mx-auto">
            <img src={icp} alt="" />
          </figure>
          <div className="text-center mt-4">
            <h4 className="text-[#45483d] dark:text-white font-bold text-[17px]">
              Polerón con Capucha{' '}
            </h4>
            <p className="text-[#45483d] dark:text-white">
              {' '}
              GTIN: 17550123456789{' '}
            </p>
          </div>
          <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:bg-[#5f6259] dark:text-white">
            {t('product.confection')}
          </h5>
          <div className="px-5">
            {/* <p className="mt-5 text-[#45483d] font-bold mb-3 dark:text-white">
            {blockchain?.process}
          </p> */}
            <ul className="mb-3">
              {data?.traceability_blockchain_lot?.time_line.map(
                (item: TtraceabilityItem, index: number) => (
                  <li className="mb-4" key={index}>
                    <p className="text-[13px] mb-2 dark:text-white">
                      {item?.label_start}
                    </p>
                    <div className="border border-solid border-[#acb2a8] px-5 py-3 flex justify-between">
                      <span className="text-[13px] dark:text-white overflow-hidden max-w-[100%] text-ellipsis">
                        {item?.hash_start}
                      </span>
                      <button>
                        <MdOutlineContentCopy className="text-[#45483d] text-[20px] ml-3" />
                      </button>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Blockchain;
