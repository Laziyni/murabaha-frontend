import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import DashboardPage from './components/pages/DashboardPage';
import DealsPage from './components/pages/DealsPage';
import ClientsPage from './components/pages/ClientsPage';
import PaymentsPage from './components/pages/PaymentsPage';
import TemplatesPage from './components/pages/TemplatesPage';
import RegistryPage from './components/pages/RegistryPage';
import SettingsPage from './components/pages/SettingsPage';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'deals', element: <DealsPage /> },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'payments', element: <PaymentsPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'registry', element: <RegistryPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
