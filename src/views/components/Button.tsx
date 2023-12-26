import React, { useState } from "react";
import "../styles/Button/Button.scss";
import add from '../../assets/plus.svg'


export const Button: React.FC = () => {
  const [isClick, setIsClick] = useState(true);

  const handleClick = () => {
    setIsClick(!isClick);
    setTimeout(() => {
      setIsClick(true);
    }, 1000);
  };
  return (
    <button
      className={isClick ? "button" : "button button_active"}
      onClick={handleClick}
    >
      <p className="button__text">{isClick ? "Добавить" : "Добавлено"}</p>
      <img src={add} alt="Кнопка 'Добавить'" />
    </button>
  );
};
