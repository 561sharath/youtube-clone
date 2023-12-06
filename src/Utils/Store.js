import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{

        toggle:ToggleSlice,
        chat:chatSlice,

    }
})

export default store