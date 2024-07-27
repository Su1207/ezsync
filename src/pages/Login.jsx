import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/companySlice";
import { setToken } from "../store/tokenSlice";
import { toast } from "react-toastify";
import { auth, gprovider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/${
          selectedOption === "student" ? "student" : "company"
        }/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const token = response.data;
        const decodedToken = jwtDecode(token);
        dispatch(setUser(decodedToken));
        dispatch(setToken(token));

        toast.success("Login Successful!");
        navigate(
          `${selectedOption === "student" ? "/studentDashboard" : "/dashboard"}`
        );
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const signInWithGoogle = async () => {
    signInWithPopup(auth, gprovider)
      .then((result) => {
        // console.log(result);
        setGoogleLogin(true);
        axios
          .post(`${API_BASE_URL}/${selectedOption}/googleAuth`, {
            fullName: result.user.displayName,
            email: result.user.email,
          })
          .then((res) => {
            const token = res.data;
            const decodedToken = jwtDecode(token);
            dispatch(setUser(decodedToken));
            dispatch(setToken(token));

            setGoogleLogin(false);
            toast.success("Register successful!");
            navigate(
              `${
                selectedOption === "student"
                  ? "/studentDashboard"
                  : "/dashboard"
              }`
            );
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid credentials or Error occured");
      });
  };

  if (googleLogin) {
    return (
      <div className="h-[90vh] w-full flex justify-center items-center">
        <svg
          className="animate-spin h-5 w-5 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.314 2.686 6 6 6v-2.709z"
          ></path>
        </svg>
        <div className="font-semibold">Signing In...</div>
      </div>
    );
  }

  return (
    <div className=" flex lg:flex-row flex-col-reverse w-full h-full items-center min-h-screen font-poppins text-white">
      <div className="landing_page w-full lg:w-[60%] min-h-screen sm:min-h-max bg-white lg:min-h-screen flex flex-col justify-center p-5">
        <div className=" flex flex-col items-center w-full p-5">
          <div className=" text-4xl font-bold mb-4">Sign In</div>
          <div className=" flex items-center gap-3 mb-8 ">
            <div
              onClick={() => setSelectedOption("student")}
              className={`${
                selectedOption === "student"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } shadow-lg rounded-sm px-4 py-2 text-sm cursor-pointer transition-all duration-300 ease-in-out`}
            >
              Student
            </div>
            <div
              onClick={() => setSelectedOption("company")}
              className={`${
                selectedOption === "company"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } shadow-lg rounded-sm px-4 py-2 text-sm cursor-pointer transition-all duration-300 ease-in-out`}
            >
              Company
            </div>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <img
              src="/google.png"
              alt=""
              className="w-9 h-9 bg-orange-500 rounded-l-md p-2"
            />
            <div
              onClick={signInWithGoogle}
              className="flex justify-center cursor-pointer text-white transition-all duration-300 ease-in-out items-center gap-3 bg-orange-500 hover:bg-orange-700 rounded-r-md py-2 px-8 sm:px-2 w-auto sm:w-[22rem]"
            >
              <div className=" text-sm">Sign in with Google</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          <div className=" flex items-center mb-4 justify-between w-auto sm:w-[24rem]">
            <div className="h-0 border-white border w-1/4"></div>
            <div className=" text-white text-sm w-2/4 text-center">
              or using your email
            </div>
            <div className="h-0 border-white border w-1/4"></div>
          </div>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-2 w-auto sm:w-[24rem]"
          >
            <div className="flex flex-col gap-1">
              <label className=" text-gray-300 font-semibold text-sm">
                Work Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@company.com"
                className=" w-full p-2.5 border text-sm bg-white rounded-md outline-none text-black"
              />
              <div className=" w-full p-2.5 rounded-md shadow-lg bg-blue-50 flex justify-start items-start gap-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="blue"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <div className=" text-gray-500 text-justify text-xs">
                  Use your corporate email to integrate customer emails,
                  existing applications, and invite your team members
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className=" text-gray-300 font-semibold text-sm">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 12 characters"
                className=" w-full p-2.5 border text-sm bg-white rounded-md outline-none text-black"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className=" w-full p-2.5 rounded-md text-white transition-all duration-300 ease-in-out flex justify-center items-center bg-orange-500 hover:bg-orange-700 text-sm mt-4 outline-none"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.314 2.686 6 6 6v-2.709z"
                  ></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className=" flex items-center gap-1 justify-end  w-auto sm:w-[24rem] mt-2">
            <div className=" text-gray-300 text-xs sm:text-sm font-light">
              Are you new to EZSync?
            </div>
            <div
              onClick={handleClick}
              className=" text-white text-xs sm:text-sm px-6 sm:px-10 py-2 rounded-sm  bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-in-out"
            >
              Register
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-[40%] p-5 lg:mt-0 my-16 lg:my-0 sm:block hidden">
        <div className=" text-4xl text-center lg:text-start font-semibold mb-4">
          Welcome Back
        </div>
        <div className=" flex flex-col pl-8 lg:pl-0 gap-8">
          <div className=" flex items-center gap-8">
            <img src="/search.png" alt="" className=" w-10 h-10" />
            <div className=" text-gray-500 text-lg">
              Explore articles, tutorials, and guides on diverse subjects{" "}
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <img src="/alarm.png" alt="" className=" w-10 h-10" />
            <div className=" text-gray-500 text-lg">
              Learn at your own pace and access educational resources anytime{" "}
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <img src="/world.png" alt="" className=" w-10 h-10" />
            <div className=" text-gray-500 text-lg">
              Engage with a community of learners and share insights
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
