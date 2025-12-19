import React from "react";

const EditAvatar = () => {
  return (
    <div className="popup popup-edit-avatar">
      <div className="popup__container">
        <button className="popup__button-close popup__button-close-avatar">
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
