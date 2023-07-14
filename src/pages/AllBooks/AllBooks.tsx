import BooksCategories from "../../components/AllBooks/BooksCategories";
import BooksDetails from "../../components/AllBooks/BooksDetails";

export default function AllBooks() {
  return (
    <div>
      <div className="grid grid-cols-3 mt-20">
        <div className="col-span-1">
          <BooksCategories />
        </div>
        <div className="col-span-2">
          {/* <ProductsDetails courseItem={categories}></ProductsDetails> */}
          <BooksDetails />
        </div>
      </div>
    </div>
  );
}
