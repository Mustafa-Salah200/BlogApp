import { createSlice } from "@reduxjs/toolkit";


export const BlogSlice = createSlice({
    name: 'blog',
    initialState:[],
    reducers:{
        AddBlog: (state,action)=>{       
            state.push(action.payload);
        },
        RemoveBlog: (state,action)=>{
            return state.filter(ele => ele.id !== action.payload.id)
        }
    }
})

export const {AddBlog , RemoveBlog} = BlogSlice.actions