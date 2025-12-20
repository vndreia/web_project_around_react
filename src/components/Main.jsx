import { useState } from "react";
import Card from "./Card.jsx";
import EditIcon from "../images/button-icon.svg.svg";
import ProfilePic from "../images/explorer.png";
import AddImage from "../images/add-button.svg";
import EditAvatar from "./Popup/EditAvatar.jsx";
import EditProfile from "./Popup/EditProfile.jsx";
import ImagePopup from "./Popup/ImagePopup.jsx";
import NewCard from "./Popup/NewCard.jsx";
import RemoveCard from "./Popup/RemoveCard.jsx";
import { initialCards } from "../utils";
import Popup from "./Popup/Popup.jsx";

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="main">
      <section className="main-bar">
        <div className="main-bar__image-wrapper">
          <button
            onClick={() => setIsPopupOpen(true)}
            style={{ border: "none", background: "none" }}
          >
            <img
              alt="explorer picture"
              className="main-bar__image"
              src={ProfilePic}
            />
          </button>
          <span className="edit-icon"></span>
        </div>
        <div className="main-bar__container">
          <div className="main-bar__text">
            <h2 className="main-bar__title"></h2>
            <p className="main-bar__paragraph"></p>
          </div>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="main-bar__button main-bar__button-type-form"
          >
            <img src={EditIcon} alt="button-icon" />
          </button>
        </div>
        <button className="main-bar__button main-bar__button-type-add">
          <img src={AddImage} alt="add-button" />
        </button>
      </section>
      <section className="cards">
        {initialCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </section>
      <Popup isOpen={isPopupOpen}>
        <EditAvatar onClose={() => setIsPopupOpen(false)} />
      </Popup>
      <Popup>
        <EditProfile onClose={() => setIsPopupOpen(false)} />
      </Popup>
      <Popup>
        <ImagePopup />
      </Popup>
      <Popup>
        <NewCard />
      </Popup>
      <Popup>
        <RemoveCard />
      </Popup>
    </main>
  );
};

export default Main;
