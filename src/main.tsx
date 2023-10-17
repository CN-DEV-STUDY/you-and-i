import React from 'react'
import ReactDOM from 'react-dom/client'
import {ClerkProvider} from "@clerk/clerk-react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {RouterProvider} from "react-router-dom";
// @ts-ignore
import {router} from "@/router";
import "./index.css";
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "@/store";

if (import.meta.env.DEV) {
  console.log("DEV")
}

if (import.meta.env.PROD) {
  console.log("PROD")
}

const {VITE_CLERK_PUBLISHABLE_KEY, VITE_BASE_URL} = import.meta.env;

if (!VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// axios
axios.defaults.baseURL = VITE_BASE_URL

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit response config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </LocalizationProvider>
    </ClerkProvider>
  </React.StrictMode>
)
