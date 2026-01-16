import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tjenester", element: <Services /> },
      { path: "om", element: <About /> },
      { path: "kontakt", element: <Contact /> },
      { path: "*", element: <div>404 – Fant ikke siden</div> },
    ],
  },
]);

if (import.meta.env.DEV) {
  console.info(
    "Hvis du ser runtime.lastError spam, test uten extensions (Incognito)."
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
