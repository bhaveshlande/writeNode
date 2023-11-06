import React from "react";
import ReactDOM from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
// import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* skeleton with theame */}
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
      <App />
      {/* </SkeletonTheme> */}
    </BrowserRouter>
  </React.StrictMode>
);
