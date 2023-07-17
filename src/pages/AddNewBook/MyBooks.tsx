import { useState } from "react";
import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "../../redux/feature/book/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IBooks } from "../../types/globalTypes";
import { useParams } from "react-router-dom";

export default function MyBooks() {
  //   const { id } = useParams();

  //   const { item, setItem } = useState("");
  //   const id = item._id;
  const { data } = useGetAllBooksQuery(undefined);
  const { user } = useAppSelector((state) => state.user);
  //   const { deleteBook } = useDeleteBookMutation({ id });
  const handleBook = (item: IBooks) => {
    console.log("id", item);
    // setItem(item);
    // deleteBook(item._id);
  };
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold my-10 uppercase">My Post</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-2xl ">
            <tr>
              <th>Cover</th>
              <th>Name</th>
              <th>genre</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.data.map((item: IBooks) => (
              <>
                {item.email === user.email && (
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask w-32 h-44">
                            <img
                              src={item.image_link}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold text-3xl">{item.title}</div>
                        <div className="text-sm opacity-50 text-xl">
                          {item.author}
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className=" text-xl"> {item.genre}</div>
                    </td>
                    <th>
                      <button className="btn bg-red-400 text-white text-xl hover:bg-red-700 ">
                        Delete
                      </button>
                    </th>
                  </tr>
                )}
              </>
            ))}
            {data?.data.map((item: IBooks) => (
              <>
                {user.email === "admin@ph.com" && (
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask w-32 h-44">
                            <img
                              src={item.image_link}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold text-3xl">{item.title}</div>
                        <div className="text-sm opacity-50 text-xl">
                          {item.author}
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className=" text-xl"> {item.genre}</div>
                    </td>
                    <th>
                      <button
                        onClick={() => handleBook(item)}
                        className="btn bg-red-400 text-white text-xl hover:bg-red-700 "
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
