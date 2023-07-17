// import { IBooks } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../redux/feature/book/bookApi";

export default function BookItem() {
  const { data } = useGetAllBooksQuery(undefined);
  console.log("object", data?.data);
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.books);

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [dispatch]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // const [data, setData] = useState<IBooks[]>([]);
  // useEffect(() => {
  //   void fetch("../../../public/books.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // console.log("book", data);
  return (
    <div className="mt-10 mx-10">
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
        {data?.data?.slice(0, 10).map((item) => (
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
                    <Link to={`/book-details/${item._id}`}>
                      <button className="btn text-sm rounded-none  btn-outline">
                        {" "}
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

      <div className="text-center mt-10 ">
        <Link to="/allbooks">
          <button className="btn text-sm rounded-none  btn-outline">
            {" "}
            See All Book
          </button>
        </Link>
      </div>
    </div>
  );
}
