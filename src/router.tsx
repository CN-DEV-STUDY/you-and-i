import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";
import Login from "./pages/Login";
import SocialLogin from "./pages/SocialLogin";
import CreateAccount from "@/components/CreateAccount.tsx";
import ChatPage from "@/pages/logged-in/ChatPage.tsx";

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
    element: <CreateAccount />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);
