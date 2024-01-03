import React from "react";
import "../styles/Content/Content.scss";
import { Input } from "./Input";
import { Button } from "./Button";

export const Content: React.FC = () => {
  return (
    <section className="content">
      <div className="content__search">
        <Input />
        <Button />
      </div>

      <ul className="content__table">
        <li className="content__cell">qweqwe</li>
      </ul>
    </section>
  );
};
