import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
    departureCity: string,
    arrivalCity: string,
    thereDate: Date | null,
    backDate: Date | null,
}


const initialState: ISearch = {
    departureCity: '',
    arrivalCity: '',
    thereDate: null,
    backDate: null,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeSearchFields(state, action) {
            const city = action.payload;
            console.log(city.value.name);
            state = city.value;
            console.log(state)
        },
         swapValues(state) { //не работает, не понимаю как исправить
            const departure = state.departureCity;
            state.departureCity = state.arrivalCity;
            state.arrivalCity = departure;
         },
      },
})

export const { changeSearchFields, swapValues } = searchSlice.actions;
export default searchSlice.reducer