import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

interface ISeats {
    trainWagonsSeats: [{
        coach: {
            available_seats: number;
            class_type: string;
            name: string;
        };
        seats: [];
    }],
    loading: boolean,
    error: string
}

const initialState: ISeats = {
    trainWagonsSeats: [{
        coach: {
            available_seats: 0,
            class_type: "",
            name: ""
        },
        seats: []
    }],
    loading: false,
    error: ""
}

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator }
})

export const seatsSlice = createSliceWithThunk({
    name: "seats",
    initialState,
    selectors: {
        seatsState: (state) => state
    },
    reducers: (create) => ({
        fetchWagonsSeatsInfo: create.asyncThunk(
            async(url: string, { rejectWithValue }: any) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        return rejectWithValue("Не удалось загрузить данные");
                    }
                    const data = await response.json();
                    console.log(data);
                    return data;
                } catch (err) {
                    return rejectWithValue(err);
                }
            },
            {
                pending: (state) => {
                    state.loading = true;
                    state.error = "";
                },
                fulfilled: (state, action) => {
                    state.trainWagonsSeats = action.payload;
                    state.error = "";
                },
                rejected: (state, action) => {
                    state.error = action.payload as string;
                },
                settled: (state) => {
                    state.loading = false;
                }
            }
    )})
})

export const { fetchWagonsSeatsInfo } = seatsSlice.actions;
export const { seatsState } = seatsSlice.selectors;
export default seatsSlice.reducer;