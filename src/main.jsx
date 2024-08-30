import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Homepage } from './components/Homepage.jsx';
import { Category } from './components/Category.jsx';
import { Cart } from './components/Cart.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/categories/:category",
    element: <Category />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
