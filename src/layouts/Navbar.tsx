import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/feature/user/userSlice";
import { auth } from "../lib/firebase";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  console.log("user", user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    // console.log();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUser(null));
      })
      .catch(() => {
        // An error happened.
      });
  };

  const menuItem = (
    <>
      <li className="font-bold">
        <Link to="/">𝐻𝑜𝓂𝑒</Link>
      </li>
      {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li> */}
      <li className="font-bold">
        <Link to="/allbooks">𝒜𝓁𝓁 𝐵𝑜𝑜𝓀𝓈</Link>
      </li>

      <li className="font-bold">
        <Link to="/about">𝒜𝒷𝑜𝓊𝓉</Link>
      </li>
      {user.email && (
        <>
          <li className="font-medium">
            <Link to="/dashboard/add-new-book">𝓓𝓪𝓼𝓱𝓫𝓸𝓪𝓻𝓭</Link>
          </li>
        </>
      )}

      {/* <li className="font-medium">
        <Link to="/dashboard">𝓓𝓪𝓼𝓱𝓫𝓸𝓪𝓻𝓭</Link>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className=" normal-case flex items-center  text-xl ml-10">
          <img className="w-5 h-5" src={logo} />
          <h1>
            {" "}
            𝘽𝙊𝙊𝙆
            <span className="text-red-200 ">𝙈𝘼𝙓</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      {user.email && (
        <>
          <div className="navbar-end">
            <a onClick={handleLogout} className="btn">
              𝐿𝑜𝑔𝑜𝓊𝓉
            </a>
          </div>
        </>
      )}
      {!user.email && (
        <>
          <div className="navbar-end">
            <Link to="/login" className="btn">
              𝐿𝑜𝑔𝒾𝓃
            </Link>
          </div>
        </>
      )}

      {/* <div className="navbar-end">
        <Link to="/login" className="btn">
          𝐿𝑜𝑔𝒾𝓃
        </Link>
      </div> */}
    </div>
  );
}
