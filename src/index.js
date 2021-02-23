import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import ScreensRoutes from "./screens/Routes/index.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ScreensRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
