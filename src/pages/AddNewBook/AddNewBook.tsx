import { useForm } from "react-hook-form";
import { IBooks } from "../../types/globalTypes";
export default function AddNewBook() {
  const {
    register,
    handleSubmit: handleBook,
    formState: { errors },
  } = useForm();
  const handleAddNewBook = (data: IBooks) => {
    console.log("data", data);
    // createImage(data);
  };
  return (
    <div>
      {" "}
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
          {/* <input className="btn btn-accent w-full" type="submit" value="Submit" /> */}
          {/* The button to open modal */}
          <label htmlFor="my-modal" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Do you Add your Book, Please Submit !
              </h3>
              {/* <p className="py-4">
        You've been selected for a chance to get one year of subscription
        to use Wikipedia for free!
      </p> */}

              <div className="modal-action">
                <input
                  className="btn btn-outline "
                  type="submit"
                  value="Submit"
                />
                <label
                  htmlFor="my-modal"
                  type="submit"
                  value="Submit"
                  className="btn"
                >
                  Cancel
                </label>
                {/* <input className="btn btn-accent w-full" type="submit" value="Submit" /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
