import Cookies from "js-cookie";
import {useAuth} from "@clerk/clerk-react";
import {useNavigate} from "react-router-dom";
import { useToast } from "@/components/ui/use-toast"
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {RootState} from "@/store.ts";
import {useSelector} from "react-redux";


const useAuthorization = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const { userId, signOut} = useAuth();

  const { toast } = useToast();

  const handleLogout = async () => {
    toast({
      title: "로그아웃 완료",
      description: "로그아웃이 성공적으로 완료되었습니다.",
    })

    try {
      Cookies.remove(COOKIE_NAME.EMAIL);
      Cookies.remove(COOKIE_NAME.ACCESS_TOKEN);
      // clerk 로그아웃
      await signOut();
      // 로그아웃 후 홈 화면으로 이동
      navigate("/login");
    } catch (error) {
      toast({
        title: "로그아웃 실패",
        description: `로그아웃에 실패하였습니다. (${error})`,
      })
    }
  };

  return { isLoggedIn, handleLogout };
}

export default useAuthorization;