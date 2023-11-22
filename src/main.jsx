import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Layout/Pages/Home/Home.jsx';
import OurMenu from './Layout/Pages/OurMenu/OurMenu.jsx';
import OurShop from './Layout/Pages/OurShop/OurShop.jsx';
import Login from './Layout/Pages/Login/Login.jsx';
import Register from './Layout/Pages/Register/Register.jsx';
import Provider from './Provider/Provider.jsx';
// import tanstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>
      },
      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
