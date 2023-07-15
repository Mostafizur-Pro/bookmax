import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div>
          <ul>
            <li>
              <Link to="/dashboard/add-new-book">Add New Book</Link>
            </li>
          </ul>
        </div>
        <div className="ml-10">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// <div className="drawer drawer-mobile">
// <input
//   id="dashboard-drawer"
//   type="checkbox"
//   className="drawer-toggle"
// />
// <div className="drawer-content">
//   <Outlet></Outlet>
// </div>
// <div className="drawer-side">
//   <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
//   <ul className="menu p-4 w-48 ">
//     <>
//       <li>
//         <Link to="/dashboard/add-new-book">Add New Book</Link>
//       </li>
//     </>
//     {/* {isAdmin && (
//       <>
//         <li>
//           <Link to="/deshboard/allUser">All User</Link>
//         </li>
//         <li>
//           <Link to="/deshboard/addproducts">Add a Products</Link>
//         </li>
//         <li>
//           <Link to="/deshboard/myproducts">My Products</Link>
//         </li>
//       </>
//     )} */}
//     {/* {isUser && (
//       <>
//         <li>
//           <Link to="/deshboard/addproducts">Add a Products</Link>
//         </li>
//         <li>
//           <Link to="/deshboard/myproducts">My Products</Link>
//         </li>
//       </>
//     )} */}
//   </ul>
// </div>
// </div>
