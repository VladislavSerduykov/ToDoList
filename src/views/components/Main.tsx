import React from "react";
import { Header } from "./Header";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { Content } from "./Content";
import { MainProps } from "../../utils/types";

export const Main: React.FC<MainProps>  = ({list}) => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);
  return (
    <section className="main">
      <Header />
      <Content list={list} />
    </section>
  );
};
