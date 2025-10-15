import { useParams } from 'react-router-dom';

/**
 * Hook personalizado para manejar la navegación preservando el parámetro gtin
 * @returns Objeto con funciones para construir URLs con gtin preservado
 */
export const useGtinNavigation = () => {
  const { gtin } = useParams<{ gtin: string }>();

  /**
   * Construye una URL preservando el parámetro gtin si existe
   * @param page - Página a la que navegar (product, traceability, sustainability, blockchain, share)
   * @returns URL completa con el parámetro gtin incluido en la ruta
   */
  const buildUrlWithGtin = (page: string): string => {
    const currentGtin = gtin || '17751234567890'; // GTIN por defecto si no existe
    return `/${currentGtin}/${page}`;
  };

  /**
   * Obtiene el valor actual del parámetro gtin
   * @returns El valor del gtin o un valor por defecto si no existe
   */
  const getCurrentGtin = (): string => {
    return gtin || '17751234567890';
  };

  return {
    buildUrlWithGtin,
    getCurrentGtin,
    gtin,
  };
};
