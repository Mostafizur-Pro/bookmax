import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllBooks from "../pages/AllBooks/AllBooks";
import DashBoard from "../layouts/DashBoard";
import AddNewBook from "../pages/AddNewBook/AddNewBook";

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
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
]);

export default routes;
