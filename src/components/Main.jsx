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
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = useState(false);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false);
  const [isPopupNewCardOpen, setIsPopupNewCardOpen] = useState(false);
  const [isPopupRemoveCardOpen, setIsPopupRemoveCardOpen] = useState(false);
  return (
    <main className="main">
      <section className="main-bar">
        <div className="main-bar__image-wrapper">
          <button
            onClick={() => setIsPopupAvatarOpen(true)}
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
            onClick={() => setIsPopupProfileOpen(true)}
            className="main-bar__button main-bar__button-type-form"
          >
            <img src={EditIcon} alt="button-icon" />
          </button>
        </div>
        <button
          onClick={() => setIsPopupNewCardOpen(true)}
          className="main-bar__button main-bar__button-type-add"
        >
          <img src={AddImage} alt="add-button" />
        </button>
      </section>
      <section className="cards">
        {initialCards.map((card, index) => (
          <Card
            onClick={() => setIsPopupImageOpen(true)}
            onRemove={() => setIsPopupRemoveCardOpen(true)}
            key={index}
            card={card}
          />
        ))}
      </section>
      <Popup isOpen={isPopupAvatarOpen}>
        <EditAvatar onClose={() => setIsPopupAvatarOpen(false)} />
      </Popup>
      <Popup isOpen={isPopupProfileOpen}>
        <EditProfile onClose={() => setIsPopupProfileOpen(false)} />
      </Popup>
      <Popup isOpen={isPopupImageOpen}>
        <ImagePopup onClose={() => setIsPopupImageOpen(false)} />
      </Popup>
      <Popup isOpen={isPopupNewCardOpen}>
        <NewCard onClose={() => setIsPopupNewCardOpen(false)} />
      </Popup>
      <Popup isOpen={isPopupRemoveCardOpen}>
        <RemoveCard onClose={() => setIsPopupRemoveCardOpen(false)} />
      </Popup>
    </main>
  );
};

export default Main;
