import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBooksQuery,
  usePostCommentMutation,
} from "../../redux/feature/book/bookApi";
import { useAppSelector } from "../../redux/hook";

export default function SingleBookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery({ id });

  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state: { user: any }) => state.user);
  const [postComment] = usePostCommentMutation();

  const handleDeleteBook = () => {
    const process = confirm("do you want to delete this book");

    if (process && id) deleteBook(id);
    navigate("/");
  };
  const handleEdit = (event: { target: any; preventDefault: () => void }) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    console.log("form", title);
  };

  const handleAddreview = (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const review = form.review.value;
    const reviewData = {
      email,
      review,
    };

    const option = {
      id: data?.data?._id,
      review: reviewData,
    };

    postComment(option);
    console.log("Post", option);
  };

  return (
    <div className="mx-auto flex justify-center  ml-10">
      <div className="bg-base-100 ">
        <figure>
          <img className="w-72" src={data?.data?.image_link} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.data?.title}
            <div className="badge badge-secondary">{data?.data?.genre}</div>
          </h2>
          <p>Year: {data?.data?.publication}</p>
          <p>Book: {data?.data?.author}</p>
        </div>
        <div>
          {user.email === data?.data?.email ? (
            <>
              <div>
                <button
                  // onClick={() => handleDeleteBook(_id)}
                  onClick={handleDeleteBook}
                  className="btn btn-active btn-secondary mr-5"
                >
                  Delete Book
                </button>
                <Link to={`/edit-book/:${data?.data?._id}`}>
                  <button className="btn btn-outline btn-secondary">
                    Edit Book
                  </button>
                </Link>

                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box">
                    <form onClick={handleEdit}>
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <div>
                        <div className="text-center ">
                          <h3 className="font-bold underline text-lg">
                            {data?.data?.title}
                          </h3>
                          <img className="w-20" src={data?.data?.image_link} />
                        </div>
                        <div>
                          <label
                            htmlFor="title"
                            className="block mb-2 mt-5 text-lg"
                          >
                            {data?.data?.title}
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder={`${data?.data?.title}`}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="genre"
                            className="block mb-2 mt-5 text-lg"
                          >
                            {data?.data?.genre}
                          </label>
                          <input
                            type="text"
                            name="genre"
                            id="genre"
                            placeholder={`${data?.data?.genre}`}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="author"
                            className="block mb-2 mt-5 text-lg"
                          >
                            {data?.data?.author}
                          </label>
                          <input
                            type="text"
                            name="author"
                            id="author"
                            placeholder={`${data?.data?.author}`}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="year"
                            className="block mb-2 mt-5 text-lg"
                          >
                            Year: {data?.data?.publication}
                          </label>
                          <input
                            type="text"
                            name="year"
                            id="year"
                            placeholder={`${data?.data?.publication}`}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="year"
                            className="block mb-2 mt-5 text-lg"
                          >
                            Select Image
                          </label>
                          <input
                            type="file"
                            name="image"
                            id="image"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                      </div>
                      <button className="w-full mt-10 px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
                        {/* {loading ? <BtnSpinner /> : "Sign In"} */}
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <button className="btn btn-active btn-secondary mr-5">
                  Wishlist
                </button>
                <button className="btn btn-outline btn-secondary">
                  Future Read
                </button>
              </div>
            </>
          )}
        </div>
        <hr className="mt-10" />
        <div>
          {user.email ? (
            <div className="mt-10 mx-2 ">
              <p className="text-3xl font font-bold mt-5">Add a Review</p>
              <div className="flex justify-center mx-2">
                <form onSubmit={handleAddreview}>
                  <input
                    name="review"
                    className="input input-bordered w-80"
                    type="text"
                  />
                  <button type="submit" className="btn btn-primary ml-5">
                    Add Review
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <p className="text-center font text-2xl font-bold  my-10">
              Please{" "}
              <Link to="/login">
                <span className="hover:underline text-blue-500"> Login</span>
              </Link>{" "}
              to add a Review
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
