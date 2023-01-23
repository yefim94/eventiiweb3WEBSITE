import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from "./Home.js"
import App from "./App"
import {TeamsError} from "./TeamsError"
import { Contact } from "./Contact";
import { Support } from "./Support";
import { Blog } from "./Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <TeamsError />,
  },
  {
    path: "/Support",
    element: <Support />,
    errorElement: <TeamsError />,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <TeamsError />,
  },
  {
    path: "/Blog",
    element: <Blog />,
    errorElement: <TeamsError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);