import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Bookbanner from "../../assets/books/bookBanner.jpg";

export default function BooksBanner() {
  return (
    <div>
      <div>
        <div
          className="hero h-64 mb-10"
          style={{ backgroundImage: `url(${Bookbanner})` }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Find Your Best Books </h1>

              <div className="flex gap-2 items-center text-white border-orange-400">
                <Link to="/">Home </Link>

                <FaAngleRight />
                <Link to="/allbooks">All Books</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
