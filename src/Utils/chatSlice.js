import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
        if (state.messages.length >= 20) {
            state.messages.splice(0, 1); // Remove the first element if the array length is 20 or more
        }
        state.messages.push(action.payload)
      
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
