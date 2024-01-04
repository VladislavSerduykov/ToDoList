import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { Button } from "./Button";
import { Input } from "./Input";
import "../styles/Main/Main.scss";
import { Table } from "./Table";

export const Main: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);
  return (
    <section className="main">
      <div className="main__inputs">
        <Input />
        <Button
          onAdd={(title) => {
            if (title) createTask(title);
          }}
        />
      </div>
      
      <Table />
    </section>
  );
};
