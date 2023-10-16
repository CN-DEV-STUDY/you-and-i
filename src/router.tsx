import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";
import Login from "./pages/Login";
import SocialLogin from "./pages/SocialLogin";

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
  }

]);
