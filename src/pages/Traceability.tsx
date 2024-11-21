import Accordion from "../components/Accordion/Accordion";
import AccordionContent from "../components/Accordion/components/AccordionContent";
import AccordionHead from "../components/Accordion/components/AccordionHead";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Traceability: React.FC = () => {
  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-6">
        <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            Descripción
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <div className="mb-6">
              <h3 className="text-[#45483D] text-[15px] mb-6">
                TELA DE ALGODÓN TANGÜIS: BERGMAN / RIVERA
              </h3>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <FaMapMarkerAlt color={"#5F6259"} className="text-[28px]" />
                </div>
                <div className="">
                  <h4 className="font-bold text-[#5F6259] text-[17px] m-0">
                    Localización
                  </h4>
                  <span className="text-[13px] text-[#5F6259] font-bold block">
                    Ubicación:
                  </span>
                  <p className="text-[13px] text-[#5F6259]">
                    Dirección, provincia, departamento, región
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-[#45483D] text-[15px] mb-6">
                TELA DE ALGODÓN TANGÜIS: BERGMAN / RIVERA
              </h3>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <FaMapMarkerAlt color={"#5F6259"} className="text-[28px]" />
                </div>
                <div className="">
                  <h4 className="font-bold text-[#5F6259] text-[17px] m-0">
                    Localización
                  </h4>
                  <span className="text-[13px] text-[#5F6259] font-bold block">
                    Ubicación:
                  </span>
                  <p className="text-[13px] text-[#5F6259]">
                    Dirección, provincia, departamento, región
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-[#45483D] text-[15px] mb-6">
                TELA DE ALGODÓN TANGÜIS: BERGMAN / RIVERA
              </h3>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <FaMapMarkerAlt color={"#5F6259"} className="text-[28px]" />
                </div>
                <div className="">
                  <h4 className="font-bold text-[#5F6259] text-[17px] m-0">
                    Localización
                  </h4>
                  <span className="text-[13px] text-[#5F6259] font-bold block">
                    Ubicación:
                  </span>
                  <p className="text-[13px] text-[#5F6259]">
                    Dirección, provincia, departamento, región
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </Accordion>

        <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            Información
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <div className="mb-6">
              <h3 className="text-[#45483D] text-[15px] mb-6">
                TELA DE ALGODÓN TANGÜIS: BERGMAN / RIVERA
              </h3>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <FaMapMarkerAlt color={"#5F6259"} className="text-[28px]" />
                </div>
                <div className="">
                  <h4 className="font-bold text-[#5F6259] text-[17px] m-0">
                    Localización
                  </h4>
                  <span className="text-[13px] text-[#5F6259] font-bold block">
                    Ubicación:
                  </span>
                  <p className="text-[13px] text-[#5F6259]">
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

