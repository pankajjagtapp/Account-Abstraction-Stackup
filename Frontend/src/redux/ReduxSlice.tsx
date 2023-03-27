import { createSlice } from "@reduxjs/toolkit";

// user details slice
export const ReduxSlice =  createSlice({
    name: 'user',
    initialState: {
        walletAddress: "",
        userDetails: {},
        network: "matic",
    },

    reducers: {
        userDetails: (state, param) => {
            const { payload } = param;
            state.userDetails = payload;
        },

        walletAddress: (state, param) => {
            const { payload } = param;
            state.walletAddress = payload;
        }

    }

})

// Loader Slice
export const LoaderSlice =  createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
    },

    reducers: {
        loader: (state, param) => {
            const { payload } = param;
            state.isLoading = payload;
        }
    }

})

// Action creators are generated for each case reducer function
export const { userDetails, walletAddress } = ReduxSlice.actions
export const { loader } = LoaderSlice.actions

