/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const user = useSelector((state) => state.company?.currentUser);

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  // Otherwise, return the protected content
  return children;
}

export default Protected;
