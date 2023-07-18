import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBooksQuery,
  usePostCommentMutation,
} from "../../redux/feature/book/bookApi";
import { useAppSelector } from "../../redux/hook";

export default function SingleBookDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery({ id });

  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.user);
  const [postComment] = usePostCommentMutation();
  // const { _id } = data.data;
  // const { title, image_link, genre, publication, author, email } = data?.data?.;
  // console.log("single", data?.data?._id);
  // console.log("deleteBook", deleteBook, id);

  const handleDeleteBook = () => {
    const process = confirm("do you want to delete this book");

    if (process && id) deleteBook(id);
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
      comment: reviewData,
    };
    console.log(option);
    postComment(option);
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
                <button className="btn btn-outline btn-secondary">
                  Edit Book
                </button>
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
