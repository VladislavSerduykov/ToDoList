import React from "react";
import { Main } from "../components/Main";
import "./index.module.scss"
import { Header } from "../components/Header";



export const App: React.FC = () => {

    return (
        <>
        <Header/>
        <Main/>
        </>
    )
}