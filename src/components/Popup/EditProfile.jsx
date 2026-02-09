import { apiCall } from "../../utils/api";
import { useState } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext.jsx";
const EditProfile = ({ onClose }) => {
  const [userInfo, setUserInfo] = useState({ name: "", about: "" });
  const { setCurrentUser } = useCurrentUser();
  //we import the context because if the form updates the user info without the context, other components won't see the changes
  //the data is saved in the API but they stay out of sync with the rest of the app
  //updates the global context when the user info is changed

  //patch method updates user info
  const editUserInfo = async (formData) => {
    try {
      const data = await apiCall.makeRequest("PATCH", "users/me", formData);
      setUserInfo(data); // Updates local userInfo state
      setCurrentUser(data); // Updates the current user in context
      onClose(); //close the popup after successful update
    } catch (error) {
      console.log("Error updating user info:", error);
    }
  };
  //this time you don't need useEffect bc this function will be called when the user submits the form in EditProfile component

  const handleSubmitUserInfo = (e) => {
    console.log("Submit triggered");
    e.preventDefault();
    editUserInfo(userInfo);
  };
  //this inputHandler works for all inputs because name property of each input in a dynamic way with [] notation
  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <>
      <button
        onClick={() => {
          onClose();
        }}
        className="popup__button-close popup__button-close-profile"
      ></button>
      <form className="form" onSubmit={handleSubmitUserInfo}>
        <h2 className="form__title">Editar perfil</h2>
        <label htmlFor="name"></label>
        <input
          type="text"
          className="form__input form__input-type-name"
          placeholder="Nombre"
          id="name"
          minLength="2"
          maxLength="200"
          required
          name="name"
          value={userInfo.name}
          onChange={inputHandleChange}
        />
        <span id="name-error" className="popup__error-visible"></span>
        <label htmlFor="about"></label>
        <input
          type="text"
          className="form__input form__input-type-about"
          placeholder="Acerca de mí"
          id="about"
          minLength="2"
          maxLength="200"
          required
          name="about"
          value={userInfo.about}
          onChange={inputHandleChange}
        />
        <span id="about-error" className="popup__error_visible"></span>
        <button
          type="submit"
          className="form__button-save"
          id="edit-profile-btn"
        >
          Guardar
        </button>
      </form>
    </>
  );
};

export default EditProfile;
