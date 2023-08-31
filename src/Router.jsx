import React from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import ListPage from './ListPage.jsx'
import ListDetail from './ListDetail'


export default function Router() {
    const router = createBrowserRouter([
        {
          path : '/',
          element : <ListPage />
          
        },
        {
          path :'/:id',
          element : <ListDetail />
        }
      ]);
    return (
        <RouterProvider router = {router} />
    );
}

