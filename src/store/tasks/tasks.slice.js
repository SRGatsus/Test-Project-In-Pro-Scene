import {createSlice} from "@reduxjs/toolkit";

const initialState = []
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addToTasks: (state, {payload}) => {
            state.push(payload)
        },
        removeToTasks: (state, {payload}) => {
            let taskID = payload
            const index = state.findIndex(task => task.id === taskID)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        editTask: (state, {payload}) => {
            let {id, title} = payload
            let task = state.find(task => task.id === id)
            task.title = title
        },
        changeTask: (state, {payload}) => {
            let {id, status} = payload
            let task = state.find(task => task.id === id)
            task.status = status
        },
    }
})
export const tasksAction = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
