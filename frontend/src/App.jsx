import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navber from "./components/Navber";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Placeorder from "./pages/Placeorder";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
    <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Home />
        <Footer/>
      </div>
    )
  },
  {
    path: "/collection",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Collection />
        <Footer/>
      </div>
    )
  },

  {
    path: "/about",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <About />
        <Footer/>
      </div>
    )
  },

  {
    path: "/contact",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Contact />
        <Footer/>
      </div>
    )
  },

  {
    path: "/product/:productId",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Product />
        <Footer/>
      </div>
    )
  },

  {
    path: "/cart",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Cart />
        <Footer/>
      </div>
    )
  },

  {
    path: "/login",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Login />
        <Footer/>
      </div>
    )
  },

  {
    path: "/placeorder",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Placeorder />
        <Footer/>
      </div>
    )
  },

  {
    path: "/Order",
    element: (
      <div>
        <ToastContainer/>
        <Navber/>
        <SearchBar/>
        <Order />
        <Footer/>
      </div>
    )
  }
]);

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
