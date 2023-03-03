import { createSlice } from '@reduxjs/toolkit';

const messIDSlice = createSlice({
    name: 'messID',
    initialState: {
        value: null,
    },

    reducers: {
        setMessID: (state, action) => {
            state.value = action.payload;
        },

        removeMessID: (state) => {
            state.value = null;
        },
    },
});

export const { setMessID, removeMessID } = messIDSlice.actions;

export default messIDSlice.reducer;
