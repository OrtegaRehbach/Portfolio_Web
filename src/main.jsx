import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Root } from './routes/Root.jsx';
import { Home } from './routes/Home.jsx';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "/home", element: <Home />},
      {path: "/contact", element: <div>Contact</div>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
