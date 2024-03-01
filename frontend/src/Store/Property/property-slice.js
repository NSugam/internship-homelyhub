import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
    //Slice name:
    name: "property",

    //Initial state for the property slice
    initialState: {
        properties:[],
        totalProperties: 0,
        searchParams: {}, //parameter used to search
        error: null, //Error State
        loading: false
    },

    //reducers func to handle different functions
    reducers: {
        getRequest(state) {
            state.loading = true;
        },
        //Action to update properties states with fetch data
        getProperties(state, action) {
            state.properties = action.payload.data;
            state.totalProperties = action.payload.all_properties;
            state.loading = false;
        },
        //Action to search parameter
        updateSearchParams: (state, action) => {
            state.searchParams = Object.keys(action.payload).length ===0 ? {}: {
                ...state.searchParams,
                ...action.payload
            }
        },
        // Action to update error state
        getError(state, action) {
            state.error = action.payload;
        }
    }
})

export const propertyAction = propertySlice.actions;

export default propertySlice;