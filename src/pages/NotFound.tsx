import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaSearchMinus,
  FaBarcode,
  FaRedoAlt,
  FaExternalLinkAlt,
  FaEnvelope,
} from 'react-icons/fa';
import LogoLight from '../assets/logo-traza-w.png';
import LogoDark from '../assets/logo-traza-b.png';
import LogoUma from '../assets/logo-uma.png';
import { DEMO_LOT, DEMO_SERIAL } from '../utils/constants';

const SUPPORT_EMAIL = 'soporte@umatechnology.io';
const GS1_VERIFIED_URL = 'https://www.gs1.org/services/verified-by-gs1';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const gtin = (location.state as { gtin?: string } | null)?.gtin ?? '';

  const handleRetry = () => {
    if (gtin) {
      navigate(`/01/${gtin}/10/${DEMO_LOT}/21/${DEMO_SERIAL}`, { replace: true });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f4] dark:bg-black py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-[520px] bg-white dark:bg-[#1a1a1a] rounded-2xl border border-[#e5e5e4] dark:border-[#2a2a2a] overflow-hidden shadow-sm">
        {/* Header con logo Traza */}
        <div className="px-8 py-6 flex justify-center border-b border-[#e5e5e4] dark:border-[#2a2a2a]">
          <img
            src={LogoLight}
            alt="Traza"
            className="h-10 block dark:hidden"
          />
          <img
            src={LogoDark}
            alt="Traza"
            className="h-10 hidden dark:block"
          />
        </div>

        {/* Status bar */}
        <div className="px-8 py-4 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
          <span className="text-[13px] text-[#797f75] dark:text-gray-400">
            Servicio TRAZA SaaS DPP disponible
          </span>
        </div>

        {/* Body */}
        <div className="px-8 pb-8 pt-2 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FCEBEB] inline-flex items-center justify-center mb-6">
            <FaSearchMinus className="text-[#A32D2D]" size={28} />
          </div>

          <h1 className="text-[20px] font-medium text-[#5f6259] dark:text-white mb-2">
            Pasaporte no encontrado
          </h1>

          <p className="text-[13px] text-[#797f75] dark:text-gray-400 mb-6">
            No pudimos vincular este código con un producto activo
          </p>

          {gtin && (
            <div className="bg-[#f5f5f4] dark:bg-[#2a2a2a] rounded-lg px-4 py-3 mb-6 inline-flex items-center gap-2.5">
              <FaBarcode className="text-[#797f75] dark:text-gray-400" size={16} />
              <span className="text-[12px] text-[#797f75] dark:text-gray-400 tracking-wider">
                GTIN
              </span>
              <span className="text-[14px] font-medium font-mono text-[#5f6259] dark:text-white">
                {gtin}
              </span>
            </div>
          )}

          <div className="text-left bg-[#f5f5f4] dark:bg-[#2a2a2a] rounded-lg px-5 py-4 mb-5">
            <p className="text-[13px] text-[#797f75] dark:text-gray-400 leading-relaxed mb-3">
              Asegúrate de que la etiqueta no esté obstruida o de que pertenezca a
              un lote con DPP activo.
            </p>
            <div className="border-t border-[#e5e5e4] dark:border-[#3a3a3a] pt-3">
              <p className="text-[11px] text-[#9ca3a0] dark:text-gray-500 mb-1 uppercase tracking-wider">
                Detalle
              </p>
              <p className="text-[13px] text-[#5f6259] dark:text-white leading-relaxed">
                El código GTIN del Pasaporte Digital de Producto no está en la
                base de datos de UMA Technology S.A.C.
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#797f75] hover:bg-[#5f6259] text-white text-[13px] font-medium transition-colors"
            >
              <FaRedoAlt size={13} />
              Reintentar
            </button>
            <a
              href={GS1_VERIFIED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#e5e5e4] dark:border-[#3a3a3a] text-[#5f6259] dark:text-white hover:bg-[#f5f5f4] dark:hover:bg-[#2a2a2a] text-[13px] font-medium transition-colors"
            >
              <FaExternalLinkAlt size={12} />
              Verified by GS1
            </a>
          </div>
        </div>

        {/* Footer soporte */}
        <div className="px-8 py-4 border-t border-[#e5e5e4] dark:border-[#2a2a2a] bg-[#f5f5f4] dark:bg-[#1a1a1a] flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#797f75] dark:text-gray-400" size={14} />
            <div>
              <p className="text-[11px] text-[#9ca3a0] dark:text-gray-500 uppercase tracking-wider">
                Soporte técnico
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[12px] text-[#5f6259] dark:text-white hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
          <img
            src={LogoUma}
            alt="UMA Technology"
            className="h-7 dark:brightness-0 dark:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
