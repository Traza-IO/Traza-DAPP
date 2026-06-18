import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AdminDPP from '../pages/AdminDPP';
import AdminIMG from '../pages/AdminIMG';
import NotFound from '../pages/NotFound';
import RequireValidGtin from './RequireValidGtin';
import { DEFAULT_PATH } from '../utils/constants';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={DEFAULT_PATH} replace />} />
        <Route
          path="/01/:gtin/10/:lot/21/:serial"
          element={
            <RequireValidGtin>
              <Layout />
            </RequireValidGtin>
          }
        />
        <Route path="/admin/dpp" element={<AdminDPP />} />
        <Route path="/admin/img" element={<AdminIMG />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to={DEFAULT_PATH} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
