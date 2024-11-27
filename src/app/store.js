import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../products/productsSlice";
import tasksReducer from '../reducers/tasksSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});

export const storeTasks = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});