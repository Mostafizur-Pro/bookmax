import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllBooks from "../pages/AllBooks/AllBooks";
import DashBoard from "../layouts/DashBoard";
import AddNewBook from "../pages/Dashboard/AddNewBook";
import SingleBookDetails from "../components/SingleBook/SingleBookDetails";
import BooksFilter from "../components/AllBooks/BooksFilter";
import FilterDashboard from "../layouts/FilterDashboard";
import MyBooks from "../pages/Dashboard/MyBooks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Wishlist from "../pages/Dashboard/Wishlist";
import FutureRead from "../pages/Dashboard/FutureRead";
import EditBook from "../components/EditBook/EditBook";

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
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <SingleBookDetails />,
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add-new-book",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-books",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/future-read",
        element: (
          <PrivateRoute>
            <FutureRead />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <FilterDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/allbooks/:genre",
        element: (
          <PrivateRoute>
            <BooksFilter />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
