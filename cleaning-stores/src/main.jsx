import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SingUp from "./routes/log/src/SingUp";
import SingIn from "./routes/log/src/SingIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path={'/log/sing_up'}element={<SingUp />} />
      <Route path={'/log/sing_in'}element={<SingIn />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
