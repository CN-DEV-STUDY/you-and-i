import Cookies from "js-cookie";
import {useAuth} from "@clerk/clerk-react";
import {useNavigate} from "react-router-dom";

const useAuthorization = () => {
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get('loggedIn');
  const { userId, signOut} = useAuth();


  const handleLogout = async () => {
    try {
      Cookies.remove("loggedIn");
      Cookies.remove("email");
      Cookies.remove("accessToken");
      // clerk 로그아웃
      await signOut();
      // 로그아웃 후 홈 화면으로 이동
      navigate("/");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return { isLoggedIn, handleLogout };
}

export default useAuthorization;