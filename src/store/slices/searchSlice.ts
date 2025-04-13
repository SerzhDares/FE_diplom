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


const initialState: ISearch = {
    departureCity: {
        id: '67ceb6548c75f00047c8f78d',
        name: 'москва'
    },
    arrivalCity: {
        id: '67ceb6548c75f00047c8f78e',
        name: 'санкт-петербург'
    },
    thereDate: '2025-03-23',
    backDate: '2025-04-06',
}

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