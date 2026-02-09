const ImagePopup = ({ onClose, imageSrc }) => {
  return (
    <>
      <button
        onClick={() => {
          onClose();
        }}
        className="popup__button-close popup__button-close-image"
      >
        {/*ClosePopup*/}
      </button>
      <div className="popup-image__content">
        <img
          src={imageSrc}
          alt="Imagen ampliada"
          className="popup-image__img"
        />
      </div>
      <p className="popup-image__caption"></p>
    </>
  );
};

export default ImagePopup;
