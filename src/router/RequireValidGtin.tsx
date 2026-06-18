import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { validateGs1Id } from '../utils/gs1/gs1Validators';

/**
 * Guard de ruta: valida que el segmento `:gtin` del path
 * `/01/:gtin/10/:lot/21/:serial` sea un GTIN GS1 sintácticamente válido
 * (longitud, dígitos y dígito de control) antes de montar el contenido.
 *
 * Si el GTIN es inválido redirige a `/not-found`. Esto corta antes de que
 * `Layout` dispare llamadas al canister con un identificador basura.
 */
const RequireValidGtin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gtin } = useParams<{ gtin: string }>();
  const result = validateGs1Id(`01/${gtin ?? ''}`);

  if (!result.valid) {
    return (
      <Navigate
        to="/not-found"
        replace
        state={{ reason: 'invalid-gtin', gtin }}
      />
    );
  }

  return <>{children}</>;
};

export default RequireValidGtin;
