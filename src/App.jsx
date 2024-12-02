import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";

import "./App.css";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SecureHeader from "./components/Header/SecureHeader";
import Basket from "./Pages/Basket";
import AuthForms from "./Pages/Auth/AuthForums";
const Layout = () => {
  
  return (
    <div className="app">
      <Header />
      <SecureHeader/>
      <Outlet />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"basket",
        element:<Basket/>
      },
      {
        path:"login",
        element:<AuthForms/>
      },
    
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
