import { useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBooksQuery,
} from "../../redux/feature/book/bookApi";
import { useAppSelector } from "../../redux/hook";

export default function SingleBookDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery({ id });

  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.user);
  // const { _id } = data.data;
  // const { title, image_link, genre, publication, author, email } = data?.data?.;
  // console.log("single", data?.data?._id);
  console.log("deleteBook", deleteBook, id);

  const handleDeleteBook = () => {
    const process = confirm("do you want to delete this book");

    if (process && id) deleteBook(id);
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
      </div>
    </div>
  );
}
