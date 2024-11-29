import { useQueryCall } from '@ic-reactor/react';
import Accordion from '../components/Accordion/Accordion';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface IitemTrace {
  title: string;
  location: string;
  ruc: string;
  coords: string;
}

export const Traceability: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data: data3, call: call3 } = useQueryCall({
    functionName: 'readLotId',
    args: ['1dqe2k2'],
  });
  const traceability = Array.isArray(data3) ? data3[0] : {};
  if (traceability?.trace_supplier) {
    console.log(traceability, 'dasd3');
  }
  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-6 px-5">
        <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            {t('product.suppliers')}
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <>
              {traceability?.trace_supplier?.map(
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
                        <h4 className="font-bold text-[#5F6259] text-[17px] m-0 dark:text-white">
                          {item.location}
                        </h4>
                        <p>
                          <span className="text-[13px] text-[#5F6259] font-bold dark:text-white">
                            RUC:
                          </span>
                          <span className="text-[13px] text-[#5F6259] dark:text-white">
                            {item.ruc}
                          </span>
                        </p>
                        <span className="text-[13px] text-[#5F6259] font-bold block dark:text-white">
                          Ubicación:
                        </span>
                        <p className="text-[13px] text-[#5F6259] dark:text-white">
                          {item.coords}
                        </p>
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
            <div className="mb-6">
              <h3 className="text-[#45483D] text-[15px] mb-6 dark:text-white">
                TELA DE ALGODÓN TANGÜIS: BERGMAN / RIVERA
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
                    Ubicación:
                  </span>
                  <p className="text-[13px] text-[#5F6259] dark:text-white">
                    Dirección, provincia, departamento, región
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </Accordion>
      </div>
    </>
  );
};
