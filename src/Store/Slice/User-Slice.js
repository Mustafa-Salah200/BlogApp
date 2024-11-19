import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser: (state,action)=>{
            state.push(action.payload);
        },
    }
})

export const {addUser} = userSlice.actions