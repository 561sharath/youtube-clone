import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice=createSlice({

    name:"toggle",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        TOGGLE_MENU:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        TOGGLE_CLOSE:(state,action)=>{
            state.isMenuOpen=action.payload
        }
    }

})

export const {TOGGLE_MENU,TOGGLE_CLOSE} = ToggleSlice.actions
export default ToggleSlice.reducer