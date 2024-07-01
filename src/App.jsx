import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import CandidateDetailsForm from "./pages/CandidateDetailsForm";
import CompanyDetailsForm from "./pages/CompanyDetailsForm";
import CompanyDashboard from "./pages/CompanyDashboard";
import Protected from "./components/protected/Protected";
import useJwtDecode from "./utiils/useJwtDecode";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResumeScreening from "./pages/ResumeScreening";

function App() {
  useJwtDecode();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/candidateDetails"
          element={
            <Protected>
              <CandidateDetailsForm />
            </Protected>
          }
        />
        <Route path="/companyDetails" element={<CompanyDetailsForm />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <CompanyDashboard />
            </Protected>
          }
        />

        <Route
          path="/resume_screening"
          element={
            <Protected>
              <ResumeScreening />
            </Protected>
          }
        />

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
