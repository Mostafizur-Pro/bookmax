import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllBooks from "../pages/AllBooks/AllBooks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      // {
      //   path: "/allbooks/:category",
      //   element: <AllBooks />,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/products?category=${params.category}`
      //     ),
      // },
    ],
  },

  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);

export default routes;
