import {Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {RootState} from "@/store.ts";
import {useSelector} from "react-redux";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
