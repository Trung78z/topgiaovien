import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
// ReactDOM.hydrateRoot(
//   document.getElementById("root"),
//   <React.StrictMode>
//     <BrowserRouter>
//       <GoogleOAuthProvider clientId="409046483115-0f9gicobjh1bfkmopiji8cdg2vt1rdbm.apps.googleusercontent.com">
//         <App />
//       </GoogleOAuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );
ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider
        // clientId="409046483115-0f9gicobjh1bfkmopiji8cdg2vt1rdbm.apps.googleusercontent.com"
        clientId="409046483115-0f9gicobjh1bfkmopiji8cdg2vt1rdbm.apps.googleusercontent.com"
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
