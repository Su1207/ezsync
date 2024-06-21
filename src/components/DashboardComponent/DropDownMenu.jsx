import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { PowerIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearUser } from "../../store/companySlice";
import { clearToken } from "../../store/tokenSlice";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const DropdownMenu = ({ logo }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      await axios.get(`${API_BASE_URL}/logout`);

      dispatch(clearUser());
      dispatch(clearToken());

      toast("Logout success!!!");
    } catch (err) {
      console.log(err);
      toast.error("Error in logout, try again later");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
      </div>
    );
  }

  return (
    <Menu as="div" className="relative w-full inline-block text-left">
      <MenuButton>
        <img
          src={logo}
          alt="User avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
      </MenuButton>

      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-gray-100 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <MenuItem>
              {({ focus }) => (
                <button
                  className={`${
                    focus ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center gap-3 w-full px-2 py-2`}
                >
                  <UserCircleIcon className="size-7" />
                  Profile
                </button>
              )}
            </MenuItem>
            {/* <MenuItem>
              {({ focus }) => (
                <button
                  className={`${
                    focus ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Settings
                </button>
              )}
            </MenuItem> */}
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={logout}
                  className={`${
                    focus ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md gap-3 items-center w-full px-2 py-2 `}
                >
                  <PowerIcon className="size-7" />
                  Logout
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
