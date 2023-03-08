import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalType: {
            createPostModal: false,
        },
    },

    reducers: {
        postModal: (state, action) => {
            state.modalType.createPostModal = action.payload;
        },
    },
});

export const { postModal } = modalSlice.actions;

export default modalSlice.reducer;
