import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";
import Login from "./pages/Login";
import SocialLogin from "./pages/SocialLogin";
import CreateAccountForm from "@/components/CreateAccountForm.tsx";
import ChatPage from "@/pages/logged-in/ChatPage.tsx";
import ProfilePage from "@/pages/logged-in/ProfilePage.tsx";
import TopBarOnly from "@/layout/TopBarOnly.tsx";
import BottomBarOnly from "@/layout/BottomBarOnly.tsx";
import TopBottomBar from "@/layout/TopBottomBar.tsx";
import PlanCalendar from "@/components/PlanCalendar.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      // TOP BAR, BOTTOM BAR
      {
        element: <TopBottomBar />,
        children: [
          {
            path: "",
            element: <HomePage/>,
          },
          {
            path: "search",
            element: <SearchPage/>,
          },
          {
            path: "plan",
            element: <PlanCalendar/>,
          },
        ]
      },

      // TOP BAR ONLY
      {
        element: <TopBarOnly />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ]
      },

      // BOTTOM BAR ONLY
      {
        element: <BottomBarOnly />,
        children: [

        ]
      },

    ],
  },

  // NO BARS
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
]);


