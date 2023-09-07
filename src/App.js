import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/ListPage.jsx";
import ListDetail from "./pages/ListDetail.jsx";
import ListWrite from "./pages/ListWrite.jsx";
import Login from "./components/Login.js";
import { UserInfoProvider } from "./Contexts/UserInfoContext.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserInfoProvider>
          <ListPage />
        </UserInfoProvider>
      ),
    },
    {
      path: "/ListWrite",
      element: <ListWrite />,
    },
    {
      path: "/:id",
      element: <ListDetail />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
