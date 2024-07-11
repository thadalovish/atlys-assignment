// import { useAuthStateContext } from "context/auth";
// import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // const { isLogin } = useAuthStateContext();
  return children;
  //  commenting this because it will provide the un-Auth screen when user session ends but
  //in our scenario need auth modal on create post button click action .
  // return isLogin ? children : <Navigate to="/un-auth" replace />;
};

export default PrivateRoute;
