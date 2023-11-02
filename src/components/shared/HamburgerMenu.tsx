import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import {GiHamburgerMenu} from "react-icons/gi";
import {BellRing, LogIn, LogOut, Settings, User, UserPlus} from "lucide-react";
import useAuthorization from "@/hooks/useAuthorization.ts";
import {useNavigate} from "react-router-dom";
import HasNoticeMark from "@/components/domain/notice/HasNoticeMark.tsx";

type Props = {
  unreadNoticeCount: number;
}

const HamburgerMenu = ({ unreadNoticeCount }: Props) => {
  const { isLoggedIn, handleLogout } = useAuthorization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <GiHamburgerMenu
          size={24}
          color="var(--color__white)" />
        {unreadNoticeCount > 0 && <HasNoticeMark />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-10}
        className="bg-[--color__primary] shadow-2xl shadow-amber-50/30 text-[--color__white]"
      >
      {isLoggedIn ? <LoggedInMenu onLogout={handleLogout} unreadNoticeCount={unreadNoticeCount} /> : <LoggedOutMenu />}
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HamburgerMenu;

type LoggedInMenuProps = {
  onLogout: () => void;
  unreadNoticeCount: number;
};

const LoggedInMenu = ({onLogout, unreadNoticeCount}: LoggedInMenuProps) => {
  const navigate = useNavigate();

  return (
    <>
      <DropdownMenuItem onClick={() => navigate("/profile")}>
        <User className="mr-2 h-4 w-4" />
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => navigate("/notification")}>
        <BellRing className="mr-2 h-4 w-4" />
        <DropdownMenuLabel>Notification({unreadNoticeCount})</DropdownMenuLabel>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => navigate("/")}>
        <Settings className="mr-2 h-4 w-4" />
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onLogout}>
        <LogOut className="mr-2 h-4 w-4" />
        <DropdownMenuLabel>Log out</DropdownMenuLabel>
      </DropdownMenuItem>
    </>
  )
};

const LoggedOutMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <DropdownMenuItem onClick={() => navigate("/login")}>
        <LogIn className="mr-2 h-4 w-4" />
        <DropdownMenuLabel>Log in</DropdownMenuLabel>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => navigate("/create-account")}>
        <UserPlus className="mr-2 h-4 w-4" />
        <DropdownMenuLabel>Sign up</DropdownMenuLabel>
      </DropdownMenuItem>
    </>
  )
};