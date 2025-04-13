import { createSlice } from "@reduxjs/toolkit";
import { ISeats } from "./seatsSlice";

// const initialState: ISeats = {
//     trainWagonsSeats: {
//         departure: [{
//             coach: {
//                 available_seats: 0,
//                 class_type: "",
//                 name: "",
//                 top_price: 0,
//                 bottom_price: 0,
//                 side_price: 0,
//                 price: 0,
//                 have_wifi: false,
//                 have_air_conditioning: false,
//                 is_linens_included: false,
//                 linens_price: 0,
//                 train: ""
//             },
//             seats: [{
//                 index: 0,
//                 available: false
//             }]
//         }],
//         arrival: [{
//             coach: {
//                 available_seats: 0,
//                 class_type: "",
//                 name: "",
//                 top_price: 0,
//                 bottom_price: 0,
//                 side_price: 0,
//                 price: 0,
//                 have_wifi: false,
//                 have_air_conditioning: false,
//                 is_linens_included: false,
//                 linens_price: 0,
//                 train: ""
//             },
//             seats: [{
//                 index: 0,
//                 available: false
//             }]
//         }]
//     }
// }

interface IActiveWagons {
    activeWagons: {
        departure: any[],
        arrival: any[]
    }
}

const initialState: IActiveWagons = {
    activeWagons: {
        departure: [],
        arrival: []
    }
}

const activeWagonsSlice = createSlice({
    name: "activeWagons",
    initialState,
    reducers: {
        setActiveWagons(state, action) {
            // const { direction, data } = action.payload;
            // state.trainWagonsSeats[direction as keyof typeof initialState.trainWagonsSeats] = data;
            // state.trainWagonsSeats = action.payload;
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
            ].filter((el) => el.coachId !== coachId);
         },
         removeAllActiveWagons(state, action) {
            state.activeWagons[action.payload as keyof typeof initialState.activeWagons] = [];
         },
    }
})

export const {setActiveWagons, removeActiveWagons, removeAllActiveWagons} = activeWagonsSlice.actions;
export default activeWagonsSlice.reducer;