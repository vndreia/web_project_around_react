const RemoveCard = ({ onClose, onDelete }) => {
  return (
    <>
      <button
        onClick={() => {
          onClose();
        }}
        className="popup__button-close popup__button-close-delete-card"
      ></button>
      <div className="form form__delete-card">
        <h2 className="form__title form__title-delete-card">
          ¿Estás seguro/a?
        </h2>
        <button
          className="form__button-save form__button-delete"
          id="deleteCard-btn"
          onClick={() => onDelete()}
        >
          Sí
        </button>
      </div>
    </>
  );
};

export default RemoveCard;
