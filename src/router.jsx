import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";
import Login from "./pages/Login";
import Calendar from "./components/Calendar";
import DateTimeCalendar from "./components/DateTimeCalendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/plan",
        element: <DateTimeCalendar />,
      },
    ],
  },
]);
