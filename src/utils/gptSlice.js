import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
    showGptOption:false
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptOption=!state.showGptOption
        }

    }
})
 export const {toggleGptSearch} =gptSlice.actions ;
export default gptSlice.reducer;