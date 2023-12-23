import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlice";



const MyntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer
    }
});

export default MyntraStore;