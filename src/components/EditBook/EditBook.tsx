import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetAllBooksQuery } from "../../redux/feature/book/bookApi";
import { IBooks } from "../../types/globalTypes";

interface IBookData {
  title: string;
  author: string;
  genre: string;
  publication: string;
  image_link: string;
}

export default function EditBook() {
  const { id } = useParams();
  const { data } = useGetAllBooksQuery(id);
  const initialTitle = data?.data?.title;
  const initialAuthor = data?.data?.author;
  const initialGenre = data?.data?.genre;
  const initialPublication = data?.data?.publication;
  const image_link = data?.data?.image_link;

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [genre, setGenre] = useState(initialGenre);
  const [publication, setPublication] = useState(initialPublication);
  const [imageData, setImageData] = useState(image_link);

  const bookData: IBookData = {
    title,
    author,
    genre,
    publication,
    image_link,
  };

  console.log("edit", bookData);

  const handleAddbook = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <section className="p-6 md:px-32 dark:text-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Book</h2>

        <form
          method="POST"
          onSubmit={handleAddbook}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Title"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="author" className="text-sm">
                  Author
                </label>
                <input
                  id="author"
                  type="text"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                  placeholder="Author"
                  className="p-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="genre" className="text-sm">
                  Genre
                </label>
                <select
                  onChange={(e) => setGenre(e.target.value)}
                  className="select select-warning w-full text-black p-2 focus:outline-none border-2"
                  name="genre"
                  defaultValue={genre}
                >
                  <option selected>Genre</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Historical-Fiction">Historical-Fiction</option>
                  <option value="Science-Fiction">Science-Fiction</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Romance">Romance</option>
                  <option value="Biography">Biography</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="publication" className="text-sm">
                  Publication
                </label>
                <select
                  onChange={(e) => setPublication(e.target.value)}
                  className="select select-warning w-full text-black p-2 focus:outline-none border-2"
                  name="publication"
                  defaultValue={publication}
                >
                  <option selected>Publication</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="thumnail" className="text-sm">
                  Thumnail
                </label>
                <input
                  id="thumnail"
                  type="text"
                  onChange={(e) => setImageData(e.target.value)}
                  value={imageData}
                  placeholder="photo url"
                  className="p-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <button
            className="bg-primary text-white w-[150px] mx-auto p-2 rounded-md hover:bg-gray-600 border-2 hover:border-gray-900"
            type="submit"
          >
            Update Book
          </button>
        </form>
      </section>
    </div>
  );
}
