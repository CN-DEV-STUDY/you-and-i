import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";
import Login from "./pages/Login";
import DateTimeCalendar from "./components/DateTimeCalendar";
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
      {
        path: "/plan",
        element: <DateTimeCalendar/>,
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
