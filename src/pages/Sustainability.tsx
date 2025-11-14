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
import { SetStateAction, useEffect, useState } from 'react';
import { useTraceabilityStore } from '../store/useTraceabilityStore';
import { useGtinNavigation } from '../hooks/useGtinNavigation';
import { createActor } from '../declarations/backend';

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
  const canisterId = process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';
  const backend = createActor(canisterId);
  const { data, isLoading, fetchData } = useTraceabilityStore();
  const { getCurrentGtin } = useGtinNavigation();
  const loading = isLoading;
  const gtin = getCurrentGtin();
  const [certificationLogos, setCertificationLogos] = useState<{[key: string]: string}>({});
  useEffect(() => {
    if (!data) {
      fetchData(gtin);
    }
  }, [data, fetchData, gtin]);

  useEffect(() => {
    const fetchImage = async (name: string, certificationId: string) => {
      console.log(name, certificationId, 'name and certificationId');
      const bytes = await backend.getImage(name);
      if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return;
      const blob = new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      console.log(imageUrl, 'imageUrl');
      return imageUrl;
    };

    console.log(data, 'data initial');
    if (data) {
      data.compliance_supplier.forEach(async (item: IitemComplianceSuppliers) => {
        item.certifications.forEach(async (certification: IitemComplianceCertification) => {
          const imageUrl = await fetchImage(certification.logo, certification.number);
          if (imageUrl) {
            setCertificationLogos(prev => ({
              ...prev,
              [certification.logo]: imageUrl
            }));
          }
        });
      });
    }
  }, [data]); // Empty dependency array = runs once on mount

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
                        <div className="border-b border-solid border-[#cccccc] pb-2 flex w-full">
                          <div key={index} className="flex-1 pb-2">
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
                          <div className="flex justify-end items-center">
                            {certificationLogos[certification.number] && (
                              <img src={certificationLogos[certification.number]} alt={certification.name} className="w-auto " />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))
              }
            </ul>
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
