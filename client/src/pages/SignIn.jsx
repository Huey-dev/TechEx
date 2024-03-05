import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // initialize use navigate
  const navigate = useNavigate();
  // track changes for input
  const [formData, setFormData] = useState({});

  // update form state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  // Submit form
  const handleSubmit = async (e) => {
    // prevent default form submission behavior
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        console.log("Sign in successful");
        navigate("/");
      } else {
        console.log("Sign in failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <section className="bg-gray-50 flex dark:bg-gray-900">
      {/* Image covering the left half */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('./image-1.svg')`, width: "50%" }}
      ></div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 className="text-xl items-center justify-center flex font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-8 dark:text-white">
          Welcome
        </h2>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup" // Link to the sign-up page
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Create an account here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
