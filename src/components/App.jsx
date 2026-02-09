import { useState, useEffect } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import { apiCall } from "../utils/api.js";
import { CurrentUserProvider } from "../contexts/CurrentUserContext.jsx";

function App() {
  const [cards, setCards] = useState([]);
  //technically this state lifting wasn't necessary because the cards state is only used in Main component, but was required

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

  //deleting card function:
  const handleCardRemove = async (cardId) => {
    try {
      await apiCall.makeRequest("DELETE", `cards/${cardId}`);
      setCards((prevCards) => {
        return prevCards.filter((card) => card._id !== cardId);
        //selects the card with the matching id to be removed
        //this is saying: remove the card with the matching id from the list of cards
      });
    } catch (error) {
      console.log("Error removing the card:", error);
    }
  };

  //like button handler
  const onLike = async (cardId) => {
    const isLiked = cards.find((card) => card._id === cardId)?.isLiked;
    const method = isLiked ? "DELETE" : "PUT";
    try {
      const data = await apiCall.makeRequest(method, `cards/${cardId}/likes`);
      console.log("Card like status:", data);
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card._id === cardId) {
            return data;
          }
          return card;
        }),
      );
    } catch (error) {
      console.log("Error liking the card:", error);
    }
  };
  return (
    <>
      <CurrentUserProvider>
        <div className="page">
          <Header />
          <Main
            cards={cards}
            setCards={setCards}
            onLike={onLike}
            handleCardRemove={handleCardRemove}
          />
          <Footer />
        </div>
      </CurrentUserProvider>
    </>
  );
}

export default App;
