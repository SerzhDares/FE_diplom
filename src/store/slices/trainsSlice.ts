import { buildCreateSlice, asyncThunkCreator} from "@reduxjs/toolkit";

interface IGetTrains {
    trains: {
        total_count: number,
        items: []
    },
    loading: boolean,
    error: string
}

const initialState: IGetTrains = {
    trains: {
        total_count: 0,
        items: []
    },
    loading: false,
    error: ""
}

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator }
})

export const trainsSlice = createSliceWithThunk({
    name: "trains",
    initialState,
    selectors: {
        trainsState: (state) => state
    },
    reducers: (create) => ({
        fetchTrains: create.asyncThunk(
            async (url: string, { rejectWithValue }: any) => {
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
                state.trains = action.payload;
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

export const { fetchTrains } = trainsSlice.actions;
export const { trainsState } = trainsSlice.selectors;
export default trainsSlice.reducer;