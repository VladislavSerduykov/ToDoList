import React from "react";
import "../styles/Content/Content.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import { MainProps } from "../../utils/types";



export const Content: React.FC<MainProps> = ({list}) => {
  return (
    <section className="content">
      <div className="content__search">
        <Input />
        <Button />
      </div>

      <ul className="content__table">
      {list.map(item => (
          <li className="content__cell" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
};
