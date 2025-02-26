import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ logo, setLoading }) => {
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setLoading(isloading);
  }, [isloading]);

  return (
    <div className=" text-gray-200 bg-blue-950 px-6 py-2 text-sm font-poppins md:block hidden">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-10">
          <div className=" text-xl pl-3">
            <img src="/2.png" alt="" className="w-28" />
          </div>
          <div>Dashboard</div>
          <Link data-replace="Screening Resume" to={"/resume_screening"}>
            <span>Screening Resume</span>
          </Link>
          <div>Create Assessment</div>
        </div>
        <div>
          <DropdownMenu logo={logo} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
