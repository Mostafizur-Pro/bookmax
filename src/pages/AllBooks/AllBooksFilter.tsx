import BooksCategories from "../../components/AllBooks/BooksCategories";
import BooksFilter from "../../components/AllBooks/BooksFilter";

export default function AllBooksFilter() {
  return (
    <div>
      <div className="grid grid-cols-4 mt-20">
        <div className="col-span-1">
          <BooksCategories />
        </div>
        <div className="col-span-3">
          <BooksFilter />
        </div>
      </div>
    </div>
  );
}
