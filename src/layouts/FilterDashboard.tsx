import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGetAllBooksQuery } from "../redux/feature/book/bookApi";

export default function FilterDashboard() {
  const { data } = useGetAllBooksQuery(undefined);
  const genre = [];
  if (data) {
    data?.data?.forEach((item) => {
      if (!genre.includes(item.genre)) {
        genre.push(item.genre);
      }
    });
  }

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="mx-10 mt-10">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="btn-outline text-white absolute right-2.5 bottom-2.5 bg-neutral hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <hr className="my-10" />
          <div>
            <h1 className="text-xl font-bold">Filter</h1>
            <div className="mx-5 my-2 ">
              {genre.map((item) => (
                <li>
                  <Link to={`/allbooks/${item}`}>{item}</Link>
                </li>
              ))}
            </div>
            <hr className="my-10" />
          </div>
        </div>

        <div className="ml-10">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer />
    </div>
  );
}
