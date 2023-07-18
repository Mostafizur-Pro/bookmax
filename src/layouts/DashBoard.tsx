import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="mx-10 mt-10">
          <div>
            <h1 className="text-2xl font-bold">Categories</h1>
            <div className="mx-5 my-2 ">
              <li>
                <Link to="/dashboard/add-new-book">Add New Book</Link>
              </li>
              <li>
                <Link to="/dashboard/my-books">My Books</Link>{" "}
              </li>
              <li>
                <Link to="/dashboard/wishlist">Wishlist</Link>{" "}
              </li>
              <li>
                <Link to="/dashboard/future-read">Future Read</Link>{" "}
              </li>
            </div>
          </div>
          <hr className="my-10" />
        </div>

        <div className="ml-10">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer />
    </div>
  );
}
