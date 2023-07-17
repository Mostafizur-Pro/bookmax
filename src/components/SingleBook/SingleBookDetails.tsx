import { useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../../redux/feature/book/bookApi";

export default function SingleBookDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery({ id });
  //   const { item } = data.data;
  console.log("single", data?.data, id);
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
      </div>
    </div>
  );
}
