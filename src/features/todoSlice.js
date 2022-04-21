import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
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
        clearToDo: (state, action) => {
            return { todo:[...state.items, action.onClick] } //this allows the item added to be removed by click on it 
        }                                                      //But the clear button itself errors out 
    }
})

export const { addToDo, removeOne, clearToDo } = todoSlice.actions

export default todoSlice.reducer