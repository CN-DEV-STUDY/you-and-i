import {Navigate} from "react-router-dom";
import Cookies from "js-cookie";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = Cookies.get('loggedIn');

  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
