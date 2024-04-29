import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "@/store/reducers/wordReducer"

export const store = configureStore({
    reducer: {
        word: wordReducer,
    }
})