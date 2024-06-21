import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyDetails } from "../store/companySlice";
import DashboardNavbar from "../components/DashboardComponent/DashboardNavbar";

const CompanyDashboard = () => {
  const companyDetails = useSelector((state) => state.company.companyDetails);
  const company = useSelector((state) => state.company.currentUser);
  const status = useSelector((state) => state.company.status);

  const dispatch = useDispatch();

  console.log(companyDetails);

  useEffect(() => {
    if (company) {
      dispatch(fetchCompanyDetails(company.id));
    }
  }, [dispatch, company]);

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
        <div className="font-semibold">loading</div>
      </div>
    );
  }

  return (
    <div className=" bg-white w-full min-h-screen">
      <DashboardNavbar logo={companyDetails?.logo} />
      <div className=" pt-5 text-5xl text-center">Dashboard</div>
      <div className=" mt-5 text-center text-2xl">
        Welcome {company.fullName}
      </div>
    </div>
  );
};

export default CompanyDashboard;
