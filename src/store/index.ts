import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducer from "./slices/searchSlice";
import trainsReducer from "./slices/trainsSlice";
import trainsParamsReducer from "./slices/trainsParamsSlice";
import sortViewResultsReducer from "./slices/sortViewResultsSlice";
import selectedTrainReducer from "./slices/selectedTrainSlice"
import seatsReducer from "./slices/seatsSlice";
import passengersQuantityReducer from "./slices/passengersQuantitySlice";
import activeWagonsReducer from "./slices/activeWagonsSlice";
import selectedSeatsReducer from "./slices/selectedSeatsSlice";
import passengersDataReducer from "./slices/passengersDataSlice";
import paymentDataReducer from "./slices/paymentSlice";

const persistConfig = {
    key: 'root',
    storage
};

const searchPersistConfig = {
    key: 'search',
    storage
}

const trainsPersistConfig = {
    key: 'trains',
    storage,
    blacklist: ['loading', 'error']
}

const trainsParamsPersistConfig = {
    key: 'trainsParams',
    storage
}

const sortViewResultsPersistConfig = {
    key: 'sortViewResults',
    storage
}

const selectedTrainPersistConfig = {
    key: 'selectedTrain',
    storage
}

const seatsPersistConfig = {
    key: 'seats',
    storage,
    blacklist: ['loading', 'error']
}

const passengersQuantityPersistConfig = {
    key: 'passengersQuantity',
    storage
}

const activeWagonsPersistConfig = {
    key: 'activeWagons',
    storage
}

const selectedSeatsPersistConfig = {
    key: 'selectedSeats',
    storage
}

const passengersDataPersistConfig = {
    key: 'passengersData',
    storage
}

const paymentDataPersistConfig = {
    key: 'paymentData',
    storage
}


const rootReducer = combineReducers({
    search: persistReducer(searchPersistConfig, searchReducer),
    trains: persistReducer(trainsPersistConfig, trainsReducer),
    trainsParams: persistReducer(trainsParamsPersistConfig, trainsParamsReducer),
    sortViewResults: persistReducer(sortViewResultsPersistConfig, sortViewResultsReducer),
    selectedTrain: persistReducer(selectedTrainPersistConfig, selectedTrainReducer),
    seats: persistReducer(seatsPersistConfig, seatsReducer),
    passengersQuantity: persistReducer(passengersQuantityPersistConfig, passengersQuantityReducer),
    activeWagons: persistReducer(activeWagonsPersistConfig, activeWagonsReducer),
    selectedSeats: persistReducer(selectedSeatsPersistConfig, selectedSeatsReducer),
    passengersData: persistReducer(passengersDataPersistConfig, passengersDataReducer),
    paymentData: persistReducer(paymentDataPersistConfig, paymentDataReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActionPaths: ['payload'],
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          },
    }),
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;