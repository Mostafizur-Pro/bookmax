import { useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../../redux/feature/book/bookApi";

export default function SingleBookDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery({ id });
  console.log("single", data?.data, id);
  return <div>hi</div>;
}
