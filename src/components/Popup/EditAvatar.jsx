import React from "react";
import ClosePopup from "../../images/close-icon.svg";
const EditAvatar = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      console.log(e.key);
      props.onClose();
    }
  };
  return (
    <div
      className="popup popup_opened popup-edit-avatar "
      onClick={props.onClose}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          onKeyDown={handleKeyDown}
          className="popup__button-close popup__button-close-avatar"
        >
          {ClosePopup}
        </button>
        <form className="form form__edit-avatar">
          <h2 className="form__title form__title-avatar">
            Cambiar foto de perfil
          </h2>
          <label for="avatar"></label>
          <input
            type="url"
            className="form__input form__input-avatar"
            id="avatar"
            placeholder="Enlace a la imagen"
            required
            name="avatar"
          />
          <span id="avatar-error" className="popup__error-visible"></span>
          <button
            type="submit"
            className="form__button-save"
            id="button-avatar"
            disabled
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAvatar;
