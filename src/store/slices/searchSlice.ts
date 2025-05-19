import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
    departureCity: {
        id: string,
        name: string
    },
    arrivalCity: {
        id: string,
        name: string
    },
    thereDate: Date | null,
    backDate: Date | null,
}

const emptyData: ISearch = {
    departureCity: {
        id: '',
        name: ''
    },
    arrivalCity: {
        id: '',
        name: ''
    },
    thereDate: null,
    backDate: null,
}

const savedData = localStorage.getItem('search');

const initialState = savedData ? JSON.parse(savedData) : emptyData;

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeSearchFieldDep(state, action) {
            const city = action.payload;
            state.departureCity = city.value;
        },
        changeSearchFieldArr(state, action) {
            const city = action.payload;
            state.arrivalCity = city.value;
        },
         swapValues(state) {
            const departure = state.departureCity;
            state.departureCity = state.arrivalCity;
            state.arrivalCity = departure;
         },
         changeThereDate (state, action) {
            const date = action.payload.toString();
            state.thereDate = date;
         },
         changeBackDate (state, action) {
            const date = action.payload.toString();
            state.backDate = date;
         },
         clearThereDate(state) {
            state.thereDate = null;
         },
         clearBackDate(state) {
            state.backDate = null;
         }
      },
})

export const { 
    changeSearchFieldDep, 
    changeSearchFieldArr, 
    swapValues, changeThereDate, 
    changeBackDate, clearThereDate, 
    clearBackDate 
} = searchSlice.actions;
export default searchSlice.reducer;