import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    isLoggin: null,
    isLoading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {}
})

// console.log(authSlice);

export default authSlice.reducer