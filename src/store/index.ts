import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pagesArrGeneratorReducer from "./slices/trainsPagesSlice";
import searchReducer from "./slices/searchSlice";

const rootReducer = combineReducers({
    trainsPages: pagesArrGeneratorReducer,
    search: searchReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;