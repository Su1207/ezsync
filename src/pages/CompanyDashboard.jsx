import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyDetails } from "../store/companySlice";
import DashboardNavbar from "../components/DashboardComponent/DashboardNavbar";
import SemiProgressBar from "../components/DashboardComponent/SemiProgressBar/SemiProgressBar";
import Assessment from "../components/DashboardComponent/Assessment";
import LiveUpdates from "../components/DashboardComponent/LiveUpdates";
import DashboardResponsiveNavbar from "../components/DashboardComponent/DashboardResponsiveNavbar";
import ScreeningTable from "../components/DashboardComponent/ScreeningTable";
import { Navigate, useNavigate } from "react-router-dom";

const CompanyDashboard = () => {
  const companyDetails = useSelector((state) => state.user.companyDetails);
  const company = useSelector((state) => state.user.currentUser);
  const atsScoreList = useSelector((state) => state.user.atsScoreList);
  const status = useSelector((state) => state.user.status);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState(0); // Example current value
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (company) {
      dispatch(fetchCompanyDetails(company.id));
    }
  }, [dispatch, company]);

  useEffect(() => {
    if (status === "idle") {
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Adjust the delay time as needed (1000ms = 1 second)

      return () => clearTimeout(delay); // Clear the timeout if the component unmounts or the effect re-runs
    }
  }, [status]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && status === "idle" && !companyDetails) {
      navigate("/companyDetails");
    }
  }, [isLoading, status, companyDetails, navigate]);

  if (status !== "idle" || loading) {
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
    <div className=" bg-gray-100 w-full font-poppins min-h-screen pb-5">
      {/* {status === "idle" && !companyDetails && (
        <Navigate to={"/companyDetails"} replace={true}></Navigate>
      )} */}
      <DashboardNavbar logo={companyDetails?.logo} setLoading={setLoading} />
      <DashboardResponsiveNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setMagnetActive={setMagnetActive}
        logo={companyDetails?.logo}
        setLoading={setLoading}
      />
      <div className=" md:pt-5 font-semibold text-2xl flex items-center mx-6">
        Welcome, {company.fullName}{" "}
        <img src="/hello.png" alt="" className=" h-12" />
      </div>

      <div className="flex md:flex-row flex-col items-center w-[96%] mt-4 mx-[2%] gap-4 md:gap-[2%]">
        <div className="w-full md:w-2/3 lg:w-3/4 bg-gray-200 px-4 py-8 relative rounded-md flex flex-col gap-4 overflow-hidden items-center justify-center">
          <div className=" w-[10rem] h-[10rem] bg-cyan-400 rounded-full absolute bottom-[-80px] sm:bottom-[-60px] left-[-60px] sm:left-[-30px]"></div>
          <div className=" w-[15rem] h-[15rem] bg-transparent rounded-full border-[12px] border-orange-600 absolute top-[-150px] sm:top-[-120px] right-[-150px] sm:right-[-120px]"></div>
          <div className=" text-cyan-400 text-2xl sm:text-4xl font-bold">
            Call to Action
          </div>
          <p className="text-xs sm:text-sm z-20 sm:w-[50%] text-gray-700 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum
            id ratione delectus velit cupiditate nam animi aperiam temporibus!
          </p>
          <button className=" bg-cyan-400 px-4 sm:text-base text-sm py-2 rounded-md shadow-lg text-white">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 shadow-lg rounded-md">
          <SemiProgressBar
            currentValue={currentValue}
            totalValue={totalValue}
          />
        </div>
      </div>

      <Assessment
        setCurrentValue={setCurrentValue}
        setTotalValue={setTotalValue}
      />

      {/* <LiveUpdates /> */}

      {/* <ScreeningTable
        atsScoreList={atsScoreList}
        invite={invite}
        setInvite={setInvite}
      /> */}
    </div>
  );
};

export default CompanyDashboard;
