import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";
import reportWebVitals from "./reportWebVitals";
import Contact from "./routes/contact";
import MyGoogleMap from "./routes/MyGoogleMap";
import UnderConstruction from "./under-construction";
import Root from "./routes/root";
import Home from "./routes/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bg",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "map/",
    element: <MyGoogleMap />,
  },
  {
    path: "contacts/",
    element: <Contact />,
  },
  {
    path: "faq/",
    element: <UnderConstruction />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
