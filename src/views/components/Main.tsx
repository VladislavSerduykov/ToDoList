import React from "react";
import { Header } from "./Header";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { Content } from "./Content";

export const Main: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);
  return (
    <>
      <Header />
      <Content />
    </>
  );
};
