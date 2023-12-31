import { useGetAllBooksQuery } from "../../redux/feature/book/bookApi";
import { Link } from "react-router-dom";
import { IBooks } from "../../types/globalTypes";

export default function AllBooks() {
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div>
      <div className="">
        {data?.data?.slice(0, 10).map((item: IBooks) => (
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
      {/* model */}
      <div className=""></div>
      {/* model */}
      <div className="mt-10 join ">
        <input
          className="join-item btn w-24 btn-square normal-case hover:underline hover:text-white hover:bg-blue-900"
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
          className="join-item btn w-20 btn-square normal-case hover:underline hover:text-white hover:bg-blue-900"
          type="radio"
          name="options"
          aria-label="Next >>"
        />
      </div>
    </div>
  );
}

{
  /* Open the modal using ID.showModal() method */
}
{
  /* <button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> */
}
