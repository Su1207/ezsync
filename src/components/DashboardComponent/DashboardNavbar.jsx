import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropDownMenu";

const DashboardNavbar = ({ logo, setLoading }) => {
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setLoading(isloading);
  }, [isloading]);

  return (
    <div className=" text-gray-200 bg-blue-950 px-6 py-2 text-sm font-poppins md:block hidden">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-10">
          <div className=" text-xl pl-5">Logo</div>
          <div>Dashboard</div>
          <div>Create Assessment</div>
          <div>Screening Resume</div>
        </div>
        <div>
          <DropdownMenu logo={logo} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
