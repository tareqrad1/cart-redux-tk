import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData } from "../api/createApi.api";
const initialState = {
    loading: false,
    data: [],
    error: null,
}

const productSlice = createSlice({
    name:"products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApiData.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchApiData.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = null
        });
        builder.addCase(fetchApiData.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        });
    }
})
export default productSlice.reducer;