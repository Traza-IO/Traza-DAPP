import Accordion from '../components/Accordion/Accordion';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import image1_1 from '../assets/1_1.jpg';
import image2_1 from '../assets/2_1.png';
import image2_2 from '../assets/2_2.png';
import image2_3 from '../assets/2_3.png';
import image2_4 from '../assets/2_4.png';
import image2_5 from '../assets/2_5.png';
import image2_6 from '../assets/2_6.png';
import image3_1 from '../assets/3_1.png';
import image3_2 from '../assets/3_2.png';
import huella_1 from '../assets/huella-1.png';
import huella_2 from '../assets/huella-2.png';
import huella_3 from '../assets/huella-3.png';
import huella_4 from '../assets/huella-4.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.jpg';
import odac from '../assets/odac.jpg';
import aenor from '../assets/aenor.jpg';
import { useEffect } from 'react';
import { useTraceabilityStore } from '../store/useTraceabilityStore';
import { useGtinNavigation } from '../hooks/useGtinNavigation';

interface IitemComplianceSuppliers {
  supplier: string;
  certifications: IitemComplianceCertification[];
}

interface IitemComplianceCertification {
  name: string;
  organization: string;
  number: string;
  audit_date: string;
  effective_date: string;
  link: string;
  logo: string;
}

export const Sustainability: React.FC = () => {
  const { data, isLoading, fetchData } = useTraceabilityStore();
  const { getCurrentGtin } = useGtinNavigation();
  const loading = isLoading;
  const gtin = getCurrentGtin();

  useEffect(() => {
    if (!data) {
      fetchData(gtin);
    }
  }, [data, fetchData, gtin]);
  
  return (
    <div className="max-w-[1024px] mx-auto mt-8 px-5">
      <div className="text-center px-5 text-[#45483d] mb-4 dark:text-white">
        <p>
          {data?.description_header}
        </p>
      </div>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={true}>
          Cumplimiento de Insumos
        </AccordionHead>
        <AccordionContent isOpen={true}>
          <div>
            <ul>
              {
                data?.compliance_supplier.map((item: IitemComplianceSuppliers, index: number) => (
                  <li key={index} className="w-full">
                    <p className="mt-5 p-3 bg-[#e3e3db] dark:text-white dark:bg-[#5f6259]">
                      {item.supplier}
                    </p>
                    <div className="text-[13px] dark:text-white">
                      {item.certifications.map((certification: IitemComplianceCertification, index: number) => (
                        <div key={index} className="border-b border-solid border-[#cccccc] pb-2">
                          <p className="text-[13px] dark:text-white">
                            Certificado Numero: {certification.number} 
                          </p>
                          <p className="text-[13px] dark:text-white">
                            {certification.organization} 
                          </p>
                          <p className="text-[13px] dark:text-white">
                            Valido hasta: {certification.audit_date} 
                          </p>
                          <p className="text-[13px] dark:text-white">
                            Valido desde: {certification.effective_date}
                          </p>
                          <p className="text-[13px] dark:text-white">
                            {certification.name} 
                          </p>
                        </div>
                      ))}
                    </div>
                  </li>
                ))
              }
              {/* <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  Certificado Numero: <br />
                  CU808267GOTS-2023-00101959 <br />
                  Valido hasta 2024-12-29 <br />
                  Global Organic Textile Standard (GOTS)
                </p>
                <img src={image2_1} alt="" className="w-auto max-w-[120px]" />
              </li> */}
            </ul>
            {/* <p className="p-3 bg-[#e3e3db] text-[13px] dark:text-white dark:bg-[#5f6259]">
              Reconocimiento a las mejores prácticas y cumplimiento de
              estándares internacionales.
            </p> */}
          </div>

        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          Proceso de Producción
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5>{data?.compliance_process?.process}</h5>
          <ul>
            {data?.compliance_process?.certifications.map((certification: IitemComplianceCertification, index: number) => (
              <li key={index} className="border-b border-solid border-[#cccccc] pb-2">
                <p className="text-[13px] dark:text-white">{certification.name}</p>
                <p className="text-[13px] dark:text-white">{certification.organization}</p>
                <p className="text-[13px] dark:text-white">{certification.number}</p>
              </li>
            ))}
          </ul>
          {/* <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:text-white dark:bg-[#5f6259]">
            Pasadores de Algodón
          </h5>
          <div className="px-5">
            <p className="mt-5 text-[#45483d] dark:text-white">
              Certificado de ISO 9001:2015
            </p>
            <ul>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  PE19/9518 <br />
                  Valido desde 16 Mayo <br />
                  2023 al 19 junio 2024
                </p>
                <img src={odac} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px] dark:text-white">
                  PE19/9518 <br />
                  Valido desde 16 Mayo <br />
                  2023 al 19 junio 2024
                </p>
                <img src={aenor} alt="" className="w-auto max-w-[120px]" />
              </li>
            </ul>
          </div> */}
        </AccordionContent>
      </Accordion>
    </div>
  );
};
