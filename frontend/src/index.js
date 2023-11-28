import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Addvehicle from './pages/Addvehicle';
import Getbill from './pages/Getbill';
import Reserveslot from './pages/Reserveslot';
import Addtransaction from './pages/Addtransaction';
import Forms from './pages/Forms';
import Slot from './pages/Slot';
import Admin from './pages/Admin';
import Member from './pages/Member';
import AdminDash from './pages/AdminDash';
import LandingPage from './pages/Landingpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/user",
    element: <App></App>,
  },
  {
    path: "/addvehicle",
    element: <Addvehicle></Addvehicle>,
  },
  {
    path: "/getbill",
    element: <Getbill></Getbill>,
  },
  {
    path: "/reserveslot",
    element: <Reserveslot></Reserveslot>,
  },
  {
    path: "/addtransaction",
    element: <Addtransaction></Addtransaction>,
  },
  {
    path: "/add",
    element: <Forms/>,
  },
  {
    path: "/slot",
    element: <Slot/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/member",
    element: <Member/>,
  },
  {
    path:"/adminlog",
    element: <AdminDash/>
  }
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
