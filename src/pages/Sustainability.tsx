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

export const Sustainability: React.FC = () => {
  return (
    <div className="max-w-[1024px] mx-auto mt-8">
      <div className="text-center px-5 text-[#45483d] mb-4 dark:text-white">
        <p>
          Polerón con capucha, a sido confeccionado con el cumplimiento de los
          estandares internacionales de sostenibilidad en la industria de la
          moda.
        </p>
      </div>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={true}>
          Cumplimiento de Insumos
        </AccordionHead>
        <AccordionContent isOpen={true}>
          <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:text-white">
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
            <h6 className="mt-5 p-3 bg-[#e3e3db] dark:text-white">
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
            <p className="p-3 bg-[#e3e3db] text-[13px] dark:text-white">
              Reconocimiento a las mejores prácticas y cumplimiento de
              estándares internacionales.
            </p>
          </div>

          <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:text-white">
            Hilos de Coser
          </h5>
          <div className="px-5">
            <p className="mt-5 text-[#45483d] dark:text-white">
              Certificaciones de EL TREN
            </p>
            <ul className="flex justify-around">
              <li>
                <img src={image3_1} alt="" width={95} />
                <span className="text-[#45483d] text-[12px] dark:text-white">
                  -641.22t CO2e
                </span>
              </li>
              <li>
                <img src={image3_2} alt="" width={95} />
                <span className="text-[#45483d] text-[12px] dark:text-white">
                  -641.22t CO2e
                </span>
              </li>
            </ul>
            <h6 className="p-3 bg-[#e3e3db] text-[13px] dark:text-white">
              Empresa peruana de moda sostenible, con gran compromiso con el
              ecosistema ambiental
            </h6>
            <p className="mt-5 text-[#45483d] dark:text-white">
              Certificaciones de EL TREN
            </p>
            <ul>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  Huella de Carbono *<br />
                  Cálculo y generación de reporte de la huella de carbono.
                </p>
                <img src={huella_1} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  Huella de Carbono *<br />
                  Cálculo y generación de reporte de la huella de carbono.
                </p>
                <img src={huella_2} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  Huella de Carbono *<br />
                  Cálculo y generación de reporte de la huella de carbono.
                </p>
                <img src={huella_3} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  Huella de Carbono *<br />
                  Cálculo y generación de reporte de la huella de carbono.
                </p>
                <img src={huella_4} alt="" className="w-auto max-w-[120px]" />
              </li>
            </ul>
            <p className="p-3 bg-[#e3e3db] text-[13px]">
              Los certificados de reconocimiento y los reportes obtenidos por EL
              TREN, para neutralizar sus emisiones de GEI. Otorgados por el
              Ministerio del Ambiente.
            </p>
            <p className="mt-5 text-[#45483d]">Huella Hidrica Peru:</p>
            <ul>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  Certificado otorgado por la Autoridad Nacional del Agua - ANA
                </p>
                <img src={image4} alt="" className="w-auto max-w-[120px]" />
              </li>
            </ul>
            <p className="p-3 bg-[#e3e3db] text-[13px]">
              El Certificado Azul es un reconocimiento a las buenas practicas
              aplicadas por EL TREN, en el uso eficiente de los recursos
              hidricos.
            </p>

            <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold">
              Pasadores de Algodón
            </h5>
            <div className="px-5">
              <p className="mt-5 text-[#45483d]">
                Certificaciones de BERGMAN / RIBERA
              </p>
              <ul>
                <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                  <p className="text-[13px]">Certificaciones de TEXTILASA</p>
                  <img src={image5} alt="" className="w-auto max-w-[120px]" />
                </li>
              </ul>
              <p className="p-3 bg-[#e3e3db] text-[13px]">
                El Certificado Azul es un reconocimiento a las buenas practicas
                aplicadas por EL TREN, en el uso eficiente de los recursos
                hidricos.
              </p>
            </div>
          </div>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          Proceso de Producción
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold">
            Tela de Algodón Tanguis
          </h5>
          <div className="px-5">
            <p className="mt-5 text-[#45483d]">Certificado de ISO 9001:2015</p>
            <ul>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  PE19/9518 <br />
                  Valido desde 16 Mayo <br />
                  2023 al 19 junio 2024
                </p>
                <img src={odac} alt="" className="w-auto max-w-[120px]" />
              </li>
              <li className="w-full flex items-center justify-between border-b border-solid border-[#cccccc] py-2">
                <p className="text-[13px]">
                  PE19/9518 <br />
                  Valido desde 16 Mayo <br />
                  2023 al 19 junio 2024
                </p>
                <img src={aenor} alt="" className="w-auto max-w-[120px]" />
              </li>
            </ul>
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
