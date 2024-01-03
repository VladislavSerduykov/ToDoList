import React, {useEffect, useState } from "react";

import { useToDoStore } from "../../data/stores/useToDoStore";

import mainApi from '../../utils/api'

import { Main } from "../components/Main";
import "./index.module.scss"
import { Post } from "../../utils/types";


export const App: React.FC = () => {
    const [list, setList] = useState<Post[]>([])


    async function handlePosts() {
        await mainApi.getPosts()
            .then(data => setList(data))
    }

    useEffect(() => {
        handlePosts()
    },[])


    return (
        <Main list={list} />
    )
}