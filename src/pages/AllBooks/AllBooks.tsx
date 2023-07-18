import BooksCategories from "../../components/AllBooks/BooksCategories";
import BooksDetails from "../../components/AllBooks/BooksDetails";

export default function AllBooks() {
  return (
    <div>
      <div className="grid grid-cols-4 mt-20">
        <div className="col-span-1">
          <BooksCategories />
        </div>
        <div className="col-span-3">
          <BooksDetails />
        </div>
      </div>
    </div>
  );
}
