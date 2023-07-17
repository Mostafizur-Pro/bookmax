import { useForm } from "react-hook-form";
import { IBooks } from "../../types/globalTypes";
import { useAppSelector } from "../../redux/hook";
// import { useCreateBookMutation } from "../../redux/feature/book/bookApi";
import { useDispatch } from "react-redux";
import { postApi } from "../../redux/feature/book/bookSlice";

const imageHostKey = "eaab174463595ddbf478d87978c913ae";

export default function AddNewBook() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit: handleBook,
    formState: { errors },
  } = useForm();
  const handleAddNewBook = (data: IBooks) => {
    console.log("data", data);
    createImage(data);
  };

  const createImage = (data) => {
    const image = data.image_link[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const userInfo = {
            book: {
              ...data,
              author: data.author,
              genre: data.genre,
              publication: data.publication,
              image_link: imgData.data.url,
              title: data.title,
              email: user.email,
            },
          };

          // console.log("object", userInfo);

          //   postBook(userInfo);
          dispatch(postApi(userInfo.book));
          // createBook(userInfo.book);
          alert("Successfully Add Your Product");
        }
      });
  };

  return (
    <div>
      <div className="max-w-lg">
        <h3 className="text-2xl text-center font-bold mt-10">Add Your Book</h3>
        <form
          onSubmit={handleBook(handleAddNewBook)}
          className="grid grid-cols-1 gap-3 mt-10"
        >
          <label className="label">
            {" "}
            <span className="label ">
              Book Name <span className="text-red-400">*</span>
            </span>
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Your book name is required",
            })}
            className="input input-bordered w-full max-w-lg"
          />
          {errors.title && (
            <p className="text-red-600">{errors.title?.message}</p>
          )}

          <div className="flex justify-between gap-5">
            <div>
              <label className="label">
                {" "}
                <p className="label">
                  Publication Year <span className="text-red-400">*</span>
                </p>
              </label>
              <input
                type="text"
                {...register("publication", {
                  required: "Your publication year is required",
                })}
                className="input input-bordered w-full max-w-lg"
              />
              {errors.publication && (
                <p className="text-red-600">{errors.publication?.message}</p>
              )}
            </div>
            <div>
              <label className="label">
                {" "}
                <p className="label">
                  Genre <span className="text-red-400">*</span>
                </p>
              </label>
              <input
                type="text"
                {...register("genre", {
                  required: "Your genre name is required",
                })}
                className="input input-bordered w-full max-w-lg"
              />
              {errors.genre && (
                <p className="text-red-600">{errors.genre?.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="label">
              {" "}
              <p className="label">
                Author Name <span className="text-red-400">*</span>
              </p>
            </label>
            <input
              type="text"
              {...register("author", {
                required: "Your author name is required",
              })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.author && (
              <p className="text-red-600">{errors.author?.message}</p>
            )}
          </div>

          <div>
            <label className="label">
              {" "}
              <p className="label">
                Select Your Image <span className="text-red-400">*</span>
              </p>
            </label>
            <input
              type="file"
              {...register("image_link", {
                required: "Photo is Required",
              })}
              className=" input-bordered w-full max-w-xs"
            />
            {errors.image_link && (
              <p className="text-red-500">{errors.image_link.message}</p>
            )}
          </div>

          <br />

          <input className="btn btn-outline " type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
