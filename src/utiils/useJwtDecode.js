import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../store/companySlice";
import { clearToken } from "../store/tokenSlice";
import { jwtDecode } from "jwt-decode";

const useJwtDecode = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp >= currentTime) {
        dispatch(setUser(decodedToken));
      } else {
        dispatch(clearUser());
        dispatch(clearToken());
      }
    }
  }, [dispatch, token]);
};

export default useJwtDecode;
