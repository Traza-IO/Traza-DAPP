import { useSearchParams } from 'react-router-dom';

/**
 * Hook personalizado para manejar la navegación preservando el parámetro gtin
 * @returns Objeto con funciones para construir URLs con gtin preservado
 */
export const useGtinNavigation = () => {
  const [searchParams] = useSearchParams();

  /**
   * Construye una URL preservando el parámetro gtin si existe
   * @param path - Ruta base a la que navegar
   * @returns URL completa con el parámetro gtin preservado
   */
  const buildUrlWithGtin = (path: string): string => {
    const gtin = searchParams.get('gtin');
    if (gtin) {
      return `${path}?gtin=${gtin}`;
    }
    return path;
  };

  /**
   * Obtiene el valor actual del parámetro gtin
   * @returns El valor del gtin o null si no existe
   */
  const getCurrentGtin = (): string | null => {
    return searchParams.get('gtin');
  };

  return {
    buildUrlWithGtin,
    getCurrentGtin,
  };
};
