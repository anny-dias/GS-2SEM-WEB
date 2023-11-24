import { } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Login from './routers/Login.jsx'
import Home from './routers/Home.jsx'
import './App.scss'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,


    children: [
      { path: '/', element: <Login /> },
      { path: '/home', element: <Home /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
    
);