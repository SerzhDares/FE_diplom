import { createSlice } from "@reduxjs/toolkit";

interface IPassengersData {
    passengers: {
        departure: any[];
        arrival: any[];
    }
}

const emptyData: IPassengersData = {
    passengers: {
        departure: [],
        arrival: [],
    }
}

const savedData = localStorage.getItem('passengersData');

const initialState = savedData ? JSON.parse(savedData) : emptyData;

const passengersDataSlice = createSlice({
    name: "passengersData",
    initialState,
    reducers: {
        addPassenger(state, action) {
            const { direction, age, surname, name, patronimyc,
                    sex, birthday, limMob, document, series, number,
                    wagonId, wagonName, seatNumber, passIndex, btnText
                } = action.payload;
            state.passengers[direction as keyof typeof initialState.passengers].splice(
                passIndex, 0, { age, surname, name, patronimyc, 
                sex, birthday, limMob, document, series, number, 
                wagonId, wagonName, seatNumber, passIndex, btnText }
            )
        },
        removePassenger (state, action) {
           const { direction, wagonName, seatNumber } = action.payload;
            state.passengers[direction as keyof typeof initialState.passengers] = state.passengers[
                direction as keyof typeof initialState.passengers
            ].filter(
                (pass: any) => !(pass.wagonName == wagonName && pass.seatNumber == seatNumber)
            );
        },
        removeAllPassengers(state) {
            state.passengers = initialState.passengers;
        },
    }
})

export const { addPassenger, removePassenger, removeAllPassengers } = passengersDataSlice.actions;
export default passengersDataSlice.reducer;