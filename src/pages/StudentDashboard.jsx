import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { clearUser, fetchStudentDetails } from "../store/companySlice";
import Interview from "./Interview";
import StudentHomepage from "../components/StudentDashboardComponent/StudentHomepage";
import StudentResponsiveNav from "../components/StudentDashboardComponent/StudentResponsiveNav";
import axios from "axios";
import { clearToken } from "../store/tokenSlice";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const StudentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const studentDetails = useSelector((state) => state.user.studentDetails);
  const student = useSelector((state) => state.user.currentUser);
  const status = useSelector((state) => state.user.status);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (student) {
      dispatch(fetchStudentDetails(student.id));
    }
  }, [dispatch, student]);

  useEffect(() => {
    if (status === "idle") {
      const delay = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(delay); // Clear the timeout if the component unmounts or the effect re-runs
    }
  }, [status]);

  useEffect(() => {
    if (!loading && status === "idle" && !studentDetails) {
      navigate("/candidateDetails");
    }
  }, [loading, status, studentDetails, navigate]);

  const logout = async () => {
    try {
      await axios.get(`${API_BASE_URL}/logout`);

      dispatch(clearUser());
      dispatch(clearToken());

      toast("Logout success!!!");
    } catch (err) {
      console.error(err);
      toast.error("Error in logout, try again later");
    }
  };

  if (status !== "idle") {
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
        <div className="font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="hidden lg:w-1/4 xl:w-1/5 bg-gray-800 text-white lg:flex flex-col">
        <div className="p-4 flex flex-col gap-2 items-center border-b border-gray-700">
          <img
            src={studentDetails?.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <h2 className="text-2xl font-bold">{student?.fullName}</h2>
          <p className="text-xl font-semibold">{studentDetails?.college}</p>
        </div>
        <ul className="flex-1 p-4 space-y-2">
          <li>
            <NavLink
              to="interview"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Interview
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Resume Generation
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Cover Letter Generation
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Digital Profile Generate
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Expert Guidance
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={logout}
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>

      <StudentResponsiveNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        profile={studentDetails?.profileImage}
        name={student?.fullName}
        college={studentDetails?.college}
      />

      {/* Main content */}
      <main className="w-full pt-24 lg:pt-6 lg:w-3/4 xl:w-4/5 p-6 bg-gray-100">
        <Routes>
          <Route path="" element={<StudentHomepage />} />
          <Route path="interview" element={<Interview />} />
          {/* <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default StudentDashboard;
