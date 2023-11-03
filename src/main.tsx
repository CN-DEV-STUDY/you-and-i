import React from "react";
import ReactDOM from "react-dom/client";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "@/store";
import {ClerkProvider} from "@clerk/clerk-react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;

//=== react query ===//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
      </LocalizationProvider>
    </ClerkProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
