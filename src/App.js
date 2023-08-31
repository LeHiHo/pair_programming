import React from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import RouteConfig from './Router.jsx';

function App() {
  const router = BrowserRouter();

  return (
    <RouterProvider router={router}>
      <RouteConfig />
    </RouterProvider>
  );
}

export default App;