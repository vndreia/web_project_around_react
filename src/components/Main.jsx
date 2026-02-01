import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import EditIcon from "../images/button-icon.svg.svg";
import ProfilePic from "../images/explorer.png";
import AddImage from "../images/add-button.svg";
import EditAvatar from "./Popup/EditAvatar.jsx";
import EditProfile from "./Popup/EditProfile.jsx";
import ImagePopup from "./Popup/ImagePopup.jsx";
import NewCard from "./Popup/NewCard.jsx";
import RemoveCard from "./Popup/RemoveCard.jsx";
import Popup from "./Popup/Popup.jsx";
import { apiCall } from "../utils/api.js";
import { useCurrentUser } from "./contexts/CurrentUserContext.jsx";

const Main = () => {
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = useState(false);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false);
  const [isPopupNewCardOpen, setIsPopupNewCardOpen] = useState(false);
  const [isPopupRemoveCardOpen, setIsPopupRemoveCardOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const { setCurrentUser, currentUser } = useCurrentUser(); //this is the line that will avoid prop drilling
  //acces the current user info from context
  //this destructures the values from the context

  //like button handler
  const onLike = (cardId) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card._id === cardId) {
          return { ...card, isLiked: !card.isLiked };
        }
        return card;
      }),
    );
  };
  //fetch initial cards from API
  const getInitialCards = async () => {
    try {
      const data = await apiCall.makeRequest("GET", "cards");
      setCards(data); //updates cards with the actual data from the API
      console.log("Data received:", data);
    } catch (error) {
      console.log("Error fetching initial cards:", error);
    }
  };

  useEffect(() => {
    getInitialCards();
  }, []);

  //fetch user info from API
  const fetchUserData = async () => {
    try {
      const data = await apiCall.makeRequest("GET", "users/me");
      console.log("User data fetched:", data);
      setCurrentUser(data); // Update the current user in context
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [setCurrentUser]); //this is stable because setCurrentUser is the method, not the value

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
              src={currentUser?.avatar || ProfilePic}
            />
          </button>
          <span className="edit-icon"></span>
        </div>
        <div className="main-bar__container">
          <div className="main-bar__text">
            <h2 className="main-bar__title">
              {currentUser?.name || "Explorer"}
            </h2>
            <p className="main-bar__paragraph">
              {currentUser?.about || "About me"}
            </p>
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
        {cards.map((card, index) => (
          <Card
            onClick={() => setIsPopupImageOpen(true)}
            onRemove={() => setIsPopupRemoveCardOpen(true)}
            key={index}
            card={card}
            setCards={setCards}
            onLike={onLike}
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
