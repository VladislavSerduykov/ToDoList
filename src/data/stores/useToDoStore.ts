import {create} from "zustand";
import random from 'random'

interface Task {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title:string) => void;
    removeTask: (id: string) => void
}

export const useToDoStore = create<ToDoStore>((set,get) => ({
    tasks: [{
        id: random.int(123,1231).toString(),
        title: 'Default task',
        createdAt: Date.now(),
    }],
    createTask: (title: string)  => {
        const {tasks} = get();
        const newTask = {
            id: random.int(190, 999).toString(),
            title,
            createdAt: random.int(1273,1283912),
        }

        set({
            tasks: [newTask].concat(tasks),
        })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title,
            }))
        })
    },
    removeTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
        })
    },
}))