import { createSlice } from "@reduxjs/toolkit";



export const ActiveUser = createSlice({
    name: 'activeUser',
    initialState: {},
    reducers: {
        setActive: (state,action)=>{
            return state = action.payload
        },
        clearActive: ()=>{
            return {}
        }
    }
})

export const {setActive, clearActive} = ActiveUser.actions