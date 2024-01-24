import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../store/routerReducer.js";


export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}