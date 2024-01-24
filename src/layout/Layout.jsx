import {Header} from "../components/header/Header.jsx";
import {Outlet} from "react-router-dom";
import {Divider} from "@chakra-ui/react";


export function Layout({listNav}) {
    return (
        <>
            <Header listNav={listNav}/>
            <Divider />
            <Outlet/>
        </>
    )
}