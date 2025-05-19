import { createSlice } from "@reduxjs/toolkit";

interface IActiveWagons {
    activeWagons: {
        departure: any[],
        arrival: any[]
    }
}

const emptyData: IActiveWagons = {
    activeWagons: {
        departure: [],
        arrival: []
    }
}

const savedData = localStorage.getItem('activeWagons');

const initialState = savedData ? JSON.parse(savedData) : emptyData;

const activeWagonsSlice = createSlice({
    name: "activeWagons",
    initialState,
    reducers: {
        setActiveWagons(state, action) {
            const { name, direction, coachId } = action.payload;
            state.activeWagons[direction as keyof typeof initialState.activeWagons] = [
               ...state.activeWagons[direction as keyof typeof initialState.activeWagons],
               { coachId, name },
            ];
        },
        removeActiveWagons(state, action) {
            const { direction, coachId } = action.payload;
            state.activeWagons[direction as keyof typeof initialState.activeWagons] = state.activeWagons[
                direction as keyof typeof initialState.activeWagons
            ].filter((el: any) => el.coachId !== coachId);
         },
         removeAllActiveWagons(state, action) {
            state.activeWagons[action.payload as keyof typeof initialState.activeWagons] = [];
         },
    }
})

export const {
    setActiveWagons, 
    removeActiveWagons, 
    removeAllActiveWagons
} = activeWagonsSlice.actions;
export default activeWagonsSlice.reducer;