import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Traceability } from '../pages/Traceability';
import { Sustainability } from '../pages/Sustainability';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Blockchain from '../pages/Blockchain';
import Share from '../pages/Share';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirigir la raíz a un GTIN por defecto */}
        <Route path="/" element={<Navigate to="/17751234567890/product" />} />

        {/* Rutas dinámicas con GTIN */}
        <Route
          path="/:gtin/product"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/:gtin/traceability"
          element={
            <Layout>
              <Traceability />
            </Layout>
          }
        />
        <Route
          path="/:gtin/sustainability"
          element={
            <Layout>
              <Sustainability />
            </Layout>
          }
        />
        <Route
          path="/:gtin/blockchain"
          element={
            <Layout>
              <Blockchain />
            </Layout>
          }
        />
        <Route
          path="/:gtin/share"
          element={
            <Layout>
              <Share />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
