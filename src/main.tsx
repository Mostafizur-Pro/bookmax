/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
