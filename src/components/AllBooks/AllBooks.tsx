import { useEffect, useState } from "react";
import { IBooks } from "../../types/globalTypes";

export default function AllBooks() {
  const [data, setData] = useState<IBooks[]>([]);
  useEffect(() => {
    void fetch("../../../public/books.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="">
        {data.slice(0, 10).map((item) => (
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
                    <button className="btn text-sm rounded-none  btn-outline">
                      See Details
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="card w-64 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={item.image_link}
                    alt="Books"
                    className="h-72 w-64"
                  />
                </figure>

                <div className="h-64">
                  <div className="card-actions mt-2 justify-end">
                    <div className="badge badge-outline mr-3">{item.genre}</div>{" "}
                  </div>
                  <div className="card-body">
                    <h2 id="font3" className="card-title">
                      {item.title}
                    </h2>
                    <p id="font3" className="italic text-sm">
                      Year: {item.publication}
                    </p>

                    <p className="text-gray-400 text-sm">By: {item.author}</p>
                  </div>
                  <div className="text-center ">
                    <button className="btn text-sm rounded-none  btn-outline">
                      {" "}
                      See Details
                    </button>
                  </div>
                </div>
              </div> */}
            </section>
          </>
        ))}
      </div>
      <div className="mt-10 join ">
        <input
          className="join-item btn w-24 btn-square normal-case"
          type="radio"
          name="options"
          aria-label="<< Previous"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="5"
        />
        <input
          className="join-item btn w-20 btn-square normal-case"
          type="radio"
          name="options"
          aria-label="Next >>"
        />
      </div>
    </div>
  );
}
