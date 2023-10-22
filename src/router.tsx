import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";
import Login from "./pages/Login";
import SocialLogin from "./pages/SocialLogin";
import CreateAccountForm from "@/components/CreateAccountForm.tsx";
import ChatPage from "@/pages/logged-in/ChatPage.tsx";
import ProfilePage from "@/pages/logged-in/ProfilePage.tsx";
import TopBarOnly from "@/components/shared/TopBarOnly.tsx";
import BottomBarOnly from "@/components/shared/BottomBarOnly.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "search",
        element: <SearchPage/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/social-login",
    element: <SocialLogin />,
  },
  {
    path: "/create-account",
    element: <CreateAccountForm />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/",
    element: <TopBarOnly />,
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ]
  },
  {
    path: "/",
    element: <BottomBarOnly />,
    children: [

    ]
  },
]);


