import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div className="text-center mt-64">
        {/* <img className="w-full" src={img} alt="" />{" "} */}
        <h3 className="text-9xl mb-10 font-bold">Oops!</h3>
        <h3 className="text-2xl t font-bold">404 - PAGE NOT FOUND</h3>

        <button className="btn bg-primary text-white mt-10 text-3xl">
          <Link to="/">Click Me</Link>
        </button>
      </div>
    </div>
  );
}
