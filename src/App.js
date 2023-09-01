import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './pages/ListPage.jsx';
import ListDetail from './pages/ListDetail.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ListPage />,
    },
    {
      path: '/:id',
      element: <ListDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
