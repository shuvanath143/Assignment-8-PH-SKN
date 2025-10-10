import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Roots/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppStore from "../pages/AppStore/AppStore";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/AppStore",
        Component: AppStore,
      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch("/appData.json").then(res => res.json()),
        Component: AppDetails,
      },
      {
        path: "/AllApps/AppDetails/:id",
        loader: () => fetch("/appData.json").then(res => res.json()),
        Component: AppDetails,
      },
      {
        path: "/AllApps",
        loader: () => fetch("/appData.json").then(res => res.json()),
        Component: AllApps,
      },
      {
        path: "/Installation",
        loader: () => fetch("/appData.json").then(res => res.json()),
        Component: Installation
      }
    ],
  },
]);
