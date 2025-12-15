import React from "react";
import Card from "./Card.jsx";
import EditIcon from "../images/button-icon.svg.svg";

const Main = () => {
  return (
    <main className="main">
      <section className="main-bar">
        <div className="main-bar__image-wrapper">
          <img alt="explorer picture" className="main-bar__image" />
          <span className="edit-icon"></span>
        </div>
        <div className="main-bar__container">
          <div className="main-bar__text">
            <h2 className="main-bar__title"></h2>
            <p className="main-bar__paragraph"></p>
          </div>
          <button className="main-bar__button main-bar__button-type-form">
            <img src={EditIcon} alt="button-icon" />
          </button>
        </div>
        <button className="main-bar__button main-bar__button-type-add">
          <img src="images/add-button (1).svg" alt="add-button" />
        </button>
      </section>
      <section className="cards">
        <Card />
      </section>
    </main>
  );
};

export default Main;
