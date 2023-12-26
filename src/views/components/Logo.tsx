import React from "react";
import "../styles/Logo/logo.scss";
import logo from "../../assets/logo.svg";

export const Logo: React.FC = () => {
  return (
    <a href="https://github.com/VladislavSerduykov/ToDoList" className="logo">
      <img src={logo} alt="logo" />
    </a>
  );
};
