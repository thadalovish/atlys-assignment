import { useAuthStateContext } from "context/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isLogin } = useAuthStateContext();
  return isLogin ? children : <Navigate to="/un-auth" replace />;
};

export default PrivateRoute;
