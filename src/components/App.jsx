import { useState, useEffect } from "react";
import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import { CurrentUserProvider } from "./contexts/CurrentUserContext.jsx";

function App() {
  return (
    <>
      <CurrentUserProvider>
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
      </CurrentUserProvider>
    </>
  );
}

export default App;
