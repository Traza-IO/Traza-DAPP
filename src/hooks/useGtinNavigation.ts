import { useParams } from 'react-router-dom';
import { DEFAULT_GTIN, DEMO_LOT, DEMO_SERIAL } from '../utils/constants';

/**
 * Hook de lectura: expone los identificadores GS1 actuales del path
 * `/01/:gtin/10/:lot/21/:serial`. Si algún segmento no está presente
 * (rutas legacy o landing) cae a los valores demo por defecto.
 */
export const useGtinNavigation = () => {
  const { gtin, lot, serial } = useParams<{
    gtin: string;
    lot: string;
    serial: string;
  }>();

  const getCurrentGtin = (): string => gtin || DEFAULT_GTIN;
  const getCurrentLot = (): string => lot || DEMO_LOT;
  const getCurrentSerial = (): string => serial || DEMO_SERIAL;

  return {
    gtin: getCurrentGtin(),
    lot: getCurrentLot(),
    serial: getCurrentSerial(),
    getCurrentGtin,
    getCurrentLot,
    getCurrentSerial,
  };
};
