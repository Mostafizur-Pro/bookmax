import { useGetAllBooksQuery } from "../../redux/feature/book/bookApi";
import { useAppSelector } from "../../redux/hook";

export default function MyBooks() {
  const { data } = useGetAllBooksQuery(undefined);
  const { user } = useAppSelector((state) => state.user);
  console.log("my", data?.data, user.email);
  return (
    <div>
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
            {data?.data.map((item) => (
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
                      <button className="btn bg-red-400 text-white text-xl ">
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
