import React from "react";
import "../styles/Content/Content.scss";
import { Input } from "./Input";
import { Button } from "./Button";

export const Content: React.FC = () => {
  return (
    <section className="content">
      <Input />
      <Button />
    </section>
  );
};
