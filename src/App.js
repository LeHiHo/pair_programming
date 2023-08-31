import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <List /> 
    }
    ,
    {
      path : '/{listNum}',
      element: <detailItem itemNum={listNum}/>
    },
    {
      path : '/hi',
      element : <p>hi</p>
    }
  ]);

  return (
    <RouterProvider router = {router} />
    
  );
}

export default App;
