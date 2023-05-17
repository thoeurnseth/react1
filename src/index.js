import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogPage from './page/BlogPage';
import Product from './page/Product';
import Contact from './page/Contact';
import Update from './crud/update';
import Delete from './crud/delete';
import Create from './crud/create';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/blog",
    element: <BlogPage/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/create",
    element: <Create/>,
  },
  {
    path: "/update/:id",
    element: <Update/>,
  },
  {
    path: "/delete/:id",
    element: <Delete/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
