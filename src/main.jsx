import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import SharedLayout from './layouts/SharedLayout';
import Dashboard from './pages/Dashboard';
import TaskManager from './pages/TaskManager';
import Onboarding from './pages/Onboarding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout><Dashboard /></SharedLayout>,
  },
  {
    path: '/dashboard',
    element: <SharedLayout><Dashboard /></SharedLayout>,
  },
  {
    path: '/tasks',
    element: <SharedLayout><TaskManager /></SharedLayout>,
  },
  {
    path: '/onboarding',
    element: <SharedLayout><Onboarding /></SharedLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
