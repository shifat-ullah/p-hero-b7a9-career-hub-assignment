import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './components/Jobs.jsx';
import Blog from './components/component/Blog.jsx';
import Home from './components/component/Home.jsx';
import Statistics from './components/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/Jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
