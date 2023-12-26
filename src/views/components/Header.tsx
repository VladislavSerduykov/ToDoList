import React from "react";
import "../styles/Header/Header.scss";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};
