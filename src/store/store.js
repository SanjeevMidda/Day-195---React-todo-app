import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

// establishing our redux store
const store = configureStore({

    // reference to our note's slice for our store
    reducer: {
        notes: noteSlice,
    },
});

export default store;