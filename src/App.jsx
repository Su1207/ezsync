import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import CandidateDetailsForm from "./pages/CandidateDetailsForm";
import CompanyDetailsForm from "./pages/CompanyDetailsForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/candidateDetails" element={<CandidateDetailsForm />} />
        <Route path="/companyDetails" element={<CompanyDetailsForm />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
