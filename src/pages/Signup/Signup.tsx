import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { createUser } from "../../redux/feature/user/userSlice";

export default function Signup() {
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.user);
  // const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // setError("");
    // setLoading(true);
    // const name = event.target.name.value;
    // const image = event.target.image.files[0];
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    // const conPassword = event.target.conPassword.value;
    // const radio = event.target.ColorOption.value;

    // if (password !== conPassword) {
    //   setError("Password does not match!");
    //   return;
    // }
    dispatch(
      createUser({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );

    // console.log(name, image, email, password, conPassword);
    console.log(event.target.email.value, event.target.password.value);
  };
  React.useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center  container mx-auto mb-10">
        <div className="flex justify-center items-center w-[90%] mx-auto  rounded-md">
          <div className="flex flex-col max-w-md p-6  sm:p-10 bg-gray-100 text-gray-900 w-[550px] rounded-md shadow-xl">
            <div className="mb-8 space-y-5">
              <h1 className="text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-black">Create a new account</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                {/* <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Profile Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    required
                  />
                </div> */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                  />
                </div>
                {/* <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="conPassword" className="text-sm">
                      Confirm Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="conPassword"
                    id="conPassword"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                  />
                </div> */}

                <div>
                  <button className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
                    {/* {loading ? <BtnSpinner /> : "Sign Up"} */}
                    Sign Up
                  </button>
                  {/* <p className="text-red-400">{error}</p> */}
                </div>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Signup with Google
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                // onClick={handleGoogleMama}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account yet?{" "}
              <Link to="/login" className="hover:underline text-gray-900">
                Sign In
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
