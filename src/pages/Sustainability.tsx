import Accordion from '../components/Accordion/Accordion';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import { useTranslation } from 'react-i18next';
import { useQueryCall } from '@ic-reactor/react';

export const Sustainability: React.FC = () => {
  const { t } = useTranslation();
  const { data: data1, call: call2 } = useQueryCall({
    functionName: 'readLotId',
    args: ['M0000001'],
  });

  const blockchain = Array.isArray(data1) ? data1[0] : {};

  console.log('blockchain', blockchain);
  return (
    <div className="max-w-[1024px] mx-auto mt-8 px-5">
      <div className="text-center px-5 text-[#45483d] mb-4 dark:text-white">
        <p>
          Polerón con capucha, a sido confeccionado con el cumplimiento de los
          estandares internacionales de sostenibilidad en la industria de la
          moda.
        </p>
      </div>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={true}>
          {t('product.compliance')}
        </AccordionHead>
        <AccordionContent isOpen={true}>
          {blockchain?.compliance_supplier?.map((item: any, index: number) => (
            <div className="px-5" key={index}>
              <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:text-white dark:bg-[#5f6259]">
                {item?.supplier}
              </h5>
              <div className="px-5">
                <ul>
                  {item?.certifications?.map((item: any, index: number) => (
                    <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                      <p className="text-[13px] dark:text-white">
                        Certificado Numero: <br />
                        {item?.number} <br />
                        Valido hasta {item?.effective_date} <br />
                        {item?.organization}
                      </p>
                      <img
                        src={
                          new URL(`../assets/${item?.logo}`, import.meta.url)
                            .href
                        }
                        alt=""
                        className="w-auto max-w-[120px]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:text-white dark:bg-[#5f6259]">
            Tela de Algodón Tanguis
          </h5>
          <div className="px-5">
            <p className="mt-5 text-[#45483d] dark:text-white">
              Certificaciones de BERGMAN / RIBERA
            </p>
            <ul>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Sello de Producto Orgánico, otorgado por el SENASA.
                </p>
                <img src={image1_1} alt="" className="w-auto max-w-[120px]" />
              </li>
            </ul>
            <h6 className="mt-5 p-3 bg-[#e3e3db] dark:text-white dark:bg-[#5f6259]">
              Reconocimiento a la producción del algodón orgánico tanguis.
            </h6>
            <p className="mt-5 text-[#45483d] dark:text-white">
              Certificaciones de BERGMAN / RIBERA
            </p>
            <ul>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img src={image2_1} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img src={image2_2} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img src={image2_3} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img src={image2_4} alt="" className="w-auto max-w-[80px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img
                  src={image2_5}
                  alt=""
                  className="w-auto max-w-[120px] dark:text-white"
                />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img src={image2_6} alt="" className="w-auto max-w-[120px]" />
              </li>
            </ul>
            <p className="p-3 bg-[#e3e3db] text-[13px] dark:text-white dark:bg-[#5f6259]">
              Reconocimiento a las mejores prácticas y cumplimiento de
              estándares internacionales.
            </p>
          </div> */}
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.production_process')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:text-white dark:bg-[#5f6259]">
            {blockchain?.compliance_process?.process}
          </h5>
          <div className="px-5">
            <ul>
              {blockchain?.compliance_process?.certifications?.map(
                (item: any, index: number) => (
                  <li
                    className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2"
                    key={index}
                  >
                    <div>
                      <p className="mt-5 text-[#45483d] dark:text-white">
                        {item?.name}
                      </p>
                      <p className="text-[13px] dark:text-white">
                        {item?.number}
                        <br />
                        {item?.effective_date}
                        <br />
                        {item?.audit_date}
                        <br />
                        {item?.organization}
                      </p>
                    </div>
                    <img
                      src={
                        new URL(`../assets/${item?.logo}`, import.meta.url).href
                      }
                      alt=""
                      className="w-auto max-w-[120px]"
                    />
                  </li>
                ),
              )}
            </ul>
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
