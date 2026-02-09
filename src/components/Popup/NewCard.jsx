import { useState } from "react";
import { apiCall } from "../../utils/api";

const NewCard = ({ onClose, setCards }) => {
  const [formData, setFormData] = useState({ name: "", link: "" });
  //same as:
  //const formData = {
  //name: placeName,
  // link: placeLink,
  //};
  //YOU CALL YOUR STATE KEYS AS THE INPUTS NAMES
  async function handleSubmitForm(e) {
    //when the user submits, it connects it with the backend to create and save the new card data in the database
    //then setCards updates the UI with the new card data by adding it to the existing cards state in Main component
    console.log("Form submitted!");
    e.preventDefault();
    try {
      const data = await apiCall.makeRequest("POST", "cards", formData);
      console.log("New card data:", data);
      setCards((prevCards) => [data, ...prevCards]); // updates the frontend UI with the response
      setFormData({ name: "", link: "" }); // Clears the form after submitting to prevent duplicate submissions and to reset the form for the next card creation
      onClose();
    } catch (error) {
      console.log("Error creating new card:", error);
    }
  }
  function handleChangeInput(e) {
    //this function updates the state
    const { name, value } = e.target; //this is getting the name and value of the input that triggers the event
    setFormData({ ...formData, [name]: value }); //this is updating the formData state with the new value of the input that triggers the event, while keeping the other values unchanged
    //when using [] it accesses to any value because it becomes dynamic
    //so it works for both inputs bc the key becomes dynamic
  }

  return (
    <>
      <button
        onClick={() => {
          onClose();
        }}
        className="popup__button-close popup__button-close-place"
      ></button>
      <form className="form form__add" onSubmit={handleSubmitForm}>
        <h2 className="form__title form__title-place">Nuevo lugar</h2>
        <label htmlFor="place"></label>
        <input
          type="text"
          className="form__input form__input-place"
          id="place"
          placeholder="Título"
          minLength="2"
          maxLength="40"
          required
          name="name"
          value={formData.name}
          onChange={handleChangeInput}
        />
        <span id="place-error" className="popup-error_visible"></span>
        <label htmlFor="link"></label>
        <input
          type="url"
          className="form__input form__input-link"
          id="link"
          placeholder="Enlace a la imagen"
          minLength="2"
          maxLength="200"
          required
          name="link"
          value={formData.link}
          onChange={handleChangeInput}
        />
        <span id="link-error" className="popup__error-visible"></span>
        <button type="submit" className="form__button-save" id="addCard-btn">
          Crear
        </button>
      </form>
    </>
  );
};

export default NewCard;
