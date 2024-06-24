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

const DropdownMenu = ({ logo, setIsLoading }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      setIsLoading(true);
      await axios.get(`${API_BASE_URL}/logout`);

      dispatch(clearUser());
      dispatch(clearToken());

      toast("Logout success!!!");
    } catch (err) {
      console.log(err);
      toast.error("Error in logout, try again later");
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <Menu as="div" className="relative w-full inline-block text-left">
      <MenuButton>
        <img
          src={logo}
          alt="User avatar"
          className="w-12 md:w-10 h-12 md:h-10 rounded-full cursor-pointer"
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
