import React, {useEffect} from "react";

import { useToDoStore } from "../../data/stores/useToDoStore";

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ])


    return (
        <article>123123</article>
    )
}