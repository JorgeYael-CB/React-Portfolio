import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PortfolioApp } from './PortfolioApp';
import AuthProvider from './presentation/providers/auth/AuthProvider'; // Asegúrate de importar AuthProvider


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <PortfolioApp />
    </AuthProvider>
  </React.StrictMode>
);