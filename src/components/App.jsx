import { useState, useEffect } from "react";
import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        {/*Aquí es donde se muestran las nuevas cards con la función de renderCards*/}
      </div>
    </>
  );
}

export default App;
