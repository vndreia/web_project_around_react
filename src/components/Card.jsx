import React from "react";
import TrashIcon from "../images/Trash.svg";

const Card = ({ title, imageSrc, index, handleDeleteCard, handleLike }) => {
  {
    /*Here's where card receives props */
  }
  return (
    <div className="card__item">
      <img className="card__image" src={imageSrc} alt={title} />
      <button className="card__trash-button">
        <img src={TrashIcon} alt="card__icon-trash" />
      </button>
      <div className="card__container-text">
        <p className="card__image-text">{title}</p>
        <button className="card__like-button">
          <svg
            className="heart-icon"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3764 9.78586C21.5412 7.54338 21.5412 3.90213 19.3764 1.68186C17.2115 -0.560619 13.6964 -0.560619 11.5315 1.68186L10.4812 2.792L9.43098 1.70406C7.26614 -0.560619 3.75096 -0.560619 1.60755 1.68186C0.557285 2.76979 0 4.21297 0 5.74496C0 7.27695 0.578719 8.72013 1.60755 9.80806L10.4812 19L19.3764 9.78586Z"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
