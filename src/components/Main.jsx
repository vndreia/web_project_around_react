import React from "react";
import Card from "./Card.jsx";
import EditIcon from "../images/button-icon.svg.svg";
import EditAvatar from "./EditAvatar.jsx";
import EditProfile from "./EditProfile.jsx";
import ImagePopup from "./ImagePopup.jsx";
import NewCard from "./NewCard.jsx";
import RemoveCard from "./RemoveCard.jsx";
import ProfilePic from "../images/explorer.png";
import AddImage from "../images/add-button.svg";

const Main = () => {
  return (
    <main className="main">
      <section className="main-bar">
        <div className="main-bar__image-wrapper">
          <img
            alt="explorer picture"
            className="main-bar__image"
            src={ProfilePic}
          />
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
          <img src={AddImage} alt="add-button" />
        </button>
      </section>
      <section className="cards">
        <Card />
      </section>
      <EditAvatar />
      <EditProfile />
      <ImagePopup />
      <NewCard />
      <RemoveCard />
    </main>
  );
};

export default Main;
