import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import City from "./pages/city";
import PrivateRoute from "./lib/PrivateRoute";
import Country from "./pages/country";
import CountryList from "./pages/countrylist";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/city/:cityName"
          element={
            <PrivateRoute>
              <City />
            </PrivateRoute>
          }
        />
        <Route
          path="/country"
          element={
            <PrivateRoute>
              <CountryList />
            </PrivateRoute>
          }
        />
        <Route
          path="/country/:countryCode"
          element={
            <PrivateRoute>
              <Country />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
