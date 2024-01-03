import React, { useEffect } from "react";

import { useToDoStore } from "../../data/stores/useToDoStore";

import { Main } from "../components/Main";
import "./index.module.scss"
import {getPosts}  from '../../utils/api'

export const App: React.FC = () => {



    return (
        <Main getPost = {getPost}/>
    )
}