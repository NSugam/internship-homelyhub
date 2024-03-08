import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        loading: false,
        user: null,
        errors: null,
        success: false
    },
    reducers: {
        getSignupRequest(state) {
            state.loading = true;
        },
        getSignupDetails(state, action) {
            state.user = action.payload
            state.isAuthenticated = true
            state.loading = false
        }
    }
})