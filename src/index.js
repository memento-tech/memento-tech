import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CookieProvider } from "./providers/CookieContext";
import logo from "./assets/logo-white.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookieProvider>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <img
              alt="Logo Memento Tech"
              src={logo}
              style={{
                objectFit: "fill",
                width: "auto",
                height: "100px",
              }}
            />
            <p style={{ fontSize: "30px" }}>Loading . . .</p>
          </div>
        }
      >
        <App />
      </Suspense>
    </CookieProvider>
  </React.StrictMode>
);
