import { useEffect, useState } from "react";
import { IBooks } from "../../types/globalTypes";

export default function BookItem() {
  const [data, setData] = useState<IBooks[]>([]);
  useEffect(() => {
    void fetch("../../../public/books.json")
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 id="font1" className="text-3xl italic mb-5">
          Action & Adventure Collection
        </h1>
        <p id="font2" className="mx-20 items-center">
          Welcome to your frinedly neighborhood library. We have more than
          15,000 free ebooks waiting to be discovered.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data.slice(0, 10).map((item) => (
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
    </div>
  );
}
