import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: "productsValue",
    initialState,
    reducers: {
        initProducts : (state, actions) => {
            state.products = [...actions.payload];
        }
    }
});

export const {initProducts} = productsSlice.actions;

export default productsSlice.reducer;