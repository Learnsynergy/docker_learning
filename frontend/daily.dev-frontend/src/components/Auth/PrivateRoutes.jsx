import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to="/onboarding/login" />;
};
export default PrivateRoutes;
