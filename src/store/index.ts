import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import trainsReducer from "./slices/trainsSlice";
import trainsParamsReducer from "./slices/trainsParamsSlice";
import  sortViewResultsReducer from "./slices/sortViewResultsSlice";
import selectedTrainReducer from "./slices/selectedTrainSlice"
import seatsReducer from "./slices/seatsSlice";
import passengersQuantityReducer from "./slices/passengersQuantitySlice";
import activeWagonsReducer from "./slices/activeWagonsSlice";


const rootReducer = combineReducers({
    search: searchReducer,
    trains: trainsReducer,
    trainsParams: trainsParamsReducer,
    sortViewResults: sortViewResultsReducer,
    selectedTrain: selectedTrainReducer,
    seats: seatsReducer,
    passengersQuantity: passengersQuantityReducer,
    activeWagons: activeWagonsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // Ignore these field paths in all actions
            ignoredActionPaths: ['payload'],
          },
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;