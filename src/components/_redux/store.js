'use client';

import { configureStore } from '@reduxjs/toolkit';

import messIDSlice from './features/messenger/messIDSlice';

const store = configureStore({
    reducer: {
        messID: messIDSlice,
    },
});

export default store;
