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
      <div className="grid grid-cols-4 gap-5">
        {data.slice(0, 12).map((item) => (
          <>
            <section className="mt-4">
              <div className="card w-64 bg-base-100 shadow-xl">
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
              </div>
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
