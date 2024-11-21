import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Traceability } from "../pages/Traceability";
import { Sustainability } from "../pages/Sustainability";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Blockchain from "../pages/Blockchain";

const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lng } = useParams<{ lng: string }>(); // Obtén el idioma de los parámetros
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng); // Cambia el idioma si es necesario
    }
  }, [lng, i18n]);

  return <>{children}</>;
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirigir la raíz a un idioma por defecto */}
        <Route path="/" element={<Navigate to="/en" />} />

        {/* Rutas con prefijo de idioma */}
        <Route path="/:lng" element={<LanguageWrapper><Layout><Home /></Layout></LanguageWrapper>} />
        <Route path="/:lng/traceability" element={<LanguageWrapper><Layout><Traceability /></Layout></LanguageWrapper>} />
        <Route path="/:lng/sustainability" element={<LanguageWrapper><Layout><Sustainability /></Layout></LanguageWrapper>} />
        <Route path="/:lng/blockchain" element={<LanguageWrapper><Layout><Blockchain /></Layout></LanguageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
