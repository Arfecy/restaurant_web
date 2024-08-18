import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './About.jsx';
import HomePage from './HomePage.jsx';
import './index.css';
import Menu from './Menu.jsx';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/menu", element: <Menu /> },
  { path: "/about", element: <About /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
