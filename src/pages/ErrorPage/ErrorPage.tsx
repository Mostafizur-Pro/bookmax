import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div className="text-center mt-64">
        {/* <img className="w-full" src={img} alt="" />{" "} */}
        <h3 className="text-7xl mb-5 font-bold">404</h3>
        <h3 className="text-2xl t font-bold">
          The page you requested could not be found{" "}
        </h3>
        <h3 className="text-xl  font-bold">
          Please{" "}
          <span className="text-red-400 text-3xl">
            <Link to="/">Click Me</Link>
          </span>
        </h3>
      </div>
    </div>
  );
}
