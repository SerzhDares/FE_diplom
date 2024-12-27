import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITrainsPages {
    pages: number[];
}

const initialState: ITrainsPages = {
    pages: []
}

export const trainsPagesSlice = createSlice({
    name: "trainsPages",
    initialState,
    reducers: {
        pagesArrGenerator: (state, action: PayloadAction<number>) => {
            state.pages.length = 0;
            for (let i = 1; i <= action.payload; i++) {
                state.pages.push(i);
            }
        }
    }
})

export const {pagesArrGenerator} = trainsPagesSlice.actions;
export default trainsPagesSlice.reducer