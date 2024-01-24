import {combineReducers} from "@reduxjs/toolkit";
import {tasksReducer,tasksAction} from "./tasks/tasks.slice.js"

export const reducers = combineReducers({
 tasks:tasksReducer
}
)

export const actions =  {
 ...tasksAction
}