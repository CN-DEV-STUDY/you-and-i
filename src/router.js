import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/logged-in/SearchPage";
import HomePage from "./pages/logged-in/HomePage";

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
    ],
  },
  ,
]);
