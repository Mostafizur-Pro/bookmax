import { Link, useParams } from "react-router-dom";
import { useGetFilterBooksQuery } from "../../redux/feature/book/bookApi";

export default function BooksFilter() {
  const { genre } = useParams();
  const { data } = useGetFilterBooksQuery({ genre });
  console.log("genre", genre);
  console.log("data", data?.data);
  return (
    <div>
      <div className="">
        {data?.data?.slice(0, 10).map((item) => (
          <>
            <section className="mt-10 mr-10">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className="h-72">
                  <img src={item.image_link} alt="Books" className=" w-56" />
                </figure>
                <div className="card-body ">
                  <div>
                    <div className="card-actions mt-2 justify-start">
                      <div className="badge badge-outline mr-3">
                        {item.genre}
                      </div>{" "}
                    </div>
                    <div>
                      <h2 id="font3" className="card-title">
                        {item.title}
                      </h2>
                      <p className="text-gray-400 text-sm">By: {item.author}</p>
                      <p id="font3" className="italic text-sm mt-10">
                        First published in {item.publication}
                      </p>
                      <p id="font3" className="italic text-sm">
                        1 edition
                      </p>

                      <p className="text-gray-400 text-sm">
                        Genre :{item.genre}
                      </p>
                    </div>
                  </div>

                  <div className="text-center ">
                    <Link to={`/book-details/${item._id}`}>
                      <button
                        // onClick={() => handleId(item)}
                        className="btn text-sm rounded-none  btn-outline"
                      >
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}
      </div>
    </div>
  );
}
