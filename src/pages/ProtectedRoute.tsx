import {Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = Cookies.get(COOKIE_NAME.IS_LOGGED_IN);

  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
