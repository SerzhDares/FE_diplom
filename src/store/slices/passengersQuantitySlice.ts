import { createSlice } from "@reduxjs/toolkit";

interface IPassengersQuantity {
    passQuantity: {
        departure: {
            adults: string;
            children: string;
            childrenNoSeat: string;
        }
        arrival: {
            adults: string;
            children: string;
            childrenNoSeat: string;
        }
    }
}

const initialState: IPassengersQuantity = {
    passQuantity: {
        departure: {
            adults: "0",
            children: "0",
            childrenNoSeat: "0",
        },
        arrival: {
            adults: "0",
            children: "0",
            childrenNoSeat: "0",
        }
    }
}

const passengersQuantitySlice = createSlice({
    name: "passengersQuantity",
    initialState,
    reducers: {
        setPassQuantityAdults (state, action) {
            const { direction, value } = action.payload;
            state.passQuantity[direction as keyof typeof initialState.passQuantity].adults = value;
        },
        setPassQuantityChildren (state, action) {
            const { direction, value } = action.payload;
            state.passQuantity[direction as keyof typeof initialState.passQuantity].children = value;
        },
        setPassQuantityChildrenNoSeat (state, action) {
            const { direction, value } = action.payload;
            state.passQuantity[direction as keyof typeof initialState.passQuantity].childrenNoSeat = value;
        }
    }
})

export const { 
    setPassQuantityAdults,
    setPassQuantityChildren,
    setPassQuantityChildrenNoSeat 
} = passengersQuantitySlice.actions;
export default passengersQuantitySlice.reducer;