import { createSlice } from "@reduxjs/toolkit";

interface ISelectedSeats {
    selectedSeats: {
        departure: any[];
        arrival: any[];
    }
}

const emptyData: ISelectedSeats = {
    selectedSeats: {
        departure: [],
        arrival: []
    }
}

const savedData = localStorage.getItem('selectedSeats');

const initialState = savedData ? JSON.parse(savedData) : emptyData;

const selectedSeatsSlice = createSlice({
    name: "selectedSeats",
    initialState,
    reducers: {
        addSelectedSeat (state, action) {
            const { direction, seatIndex, seatPrice, wagonName, wagonId, passId } = action.payload;
            state.selectedSeats[direction as keyof typeof initialState.selectedSeats] = [
                ...state.selectedSeats[direction as keyof typeof initialState.selectedSeats],
                { seatIndex, seatPrice, wagonName, wagonId, passId }
             ];
        },
        removeSelectedSeat (state, action) {
            const { direction, seatIndex, wagonId } = action.payload;
            state.selectedSeats[direction as keyof typeof initialState.selectedSeats] = state.selectedSeats[
                direction as keyof typeof initialState.selectedSeats
            ].filter((el: any) => !(el.seatIndex == seatIndex && el.wagonId == wagonId));
        },
        removeAllSelectedSeats(state) {
            state.selectedSeats = initialState.selectedSeats;
        },
    }
})

export const { addSelectedSeat, removeSelectedSeat, removeAllSelectedSeats } = selectedSeatsSlice.actions;
export default selectedSeatsSlice.reducer;