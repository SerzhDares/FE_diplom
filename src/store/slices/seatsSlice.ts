import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

export interface ISeats {
    trainWagonsSeats: {
        departure: [{
            coach: {
                available_seats: number;
                class_type: string;
                name: string;
                top_price: number;
                bottom_price: number;
                side_price: number;
                price: number;
                have_wifi: boolean;
                have_air_conditioning: boolean;
                is_linens_included: boolean;
                linens_price: number;
                train: string;
                _id?: string;
            };
            seats: [{
                index: number;
                available: boolean;
            }];
        }],
        arrival: [{
            coach: {
                available_seats: number;
                class_type: string;
                name: string;
                top_price: number;
                bottom_price: number;
                side_price: number;
                price: number;
                have_wifi: boolean;
                have_air_conditioning: boolean;
                is_linens_included: boolean;
                linens_price: number;
                train: string;
                _id?: string;
            };
            seats: [{
                index: number;
                available: boolean;
            }];
        }]
    },
    loading?: boolean,
    error?: string,
}

const initialState: ISeats = {
    trainWagonsSeats: {
        departure: [{
            coach: {
                available_seats: 0,
                class_type: "",
                name: "",
                top_price: 0,
                bottom_price: 0,
                side_price: 0,
                price: 0,
                have_wifi: false,
                have_air_conditioning: false,
                is_linens_included: false,
                linens_price: 0,
                train: "",
                _id: ""
            },
            seats: [{
                index: 0,
                available: false
            }]
        }],
        arrival: [{
            coach: {
                available_seats: 0,
                class_type: "",
                name: "",
                top_price: 0,
                bottom_price: 0,
                side_price: 0,
                price: 0,
                have_wifi: false,
                have_air_conditioning: false,
                is_linens_included: false,
                linens_price: 0,
                train: "",
                _id: ""
            },
            seats: [{
                index: 0,
                available: false
            }]
        }]
    },
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
            async ({url, direction}: any, { rejectWithValue }: any) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        return rejectWithValue("Не удалось загрузить данные");
                    }
                    const data = await response.json();
                    return {data, direction};
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
                    const { data, direction } = action.payload;
                    state.trainWagonsSeats[direction as keyof typeof initialState.trainWagonsSeats] = data;
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