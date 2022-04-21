import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeOne: (state, action) => {
            console.log(action)
                let array = [...state.items]
                let index = action.payload
                if(index!== -1) {
                    array.splice(index, 1)
                    return { items: array }
                }
        }, 
        clearToDo: () => {
            return { todo:[] }
        }
    }
})

export const { addToDo, removeOne, clearToDo } = todoSlice.actions

export default todoSlice.reducer