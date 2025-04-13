import { createSlice } from "@reduxjs/toolkit";

interface ISelectedTrain {
    selectedTrain: {
        departure: {
            _id: string;
            train: {name: string;},
            from: {
                city: {name: string;}
                railway_station_name: string;
                datetime: string;
            },
            to: {
                city: {name: string;}
                railway_station_name: string;
                datetime: string;
            },
            duration: string;
        },
        arrival: {
            _id: string;
            train: {name: string;},
            from: {
                city: {name: string;}
                railway_station_name: string;
                datetime: string;
            },
            to: {
                city: {name: string;}
                railway_station_name: string;
                datetime: string;
            },
            duration: string;
        }
    }
}

const initialState: ISelectedTrain = {
    selectedTrain: {
        departure: {
            _id: "",
            train: {name: ""},
            from: {
                city: {name: ""},
                railway_station_name: "",
                datetime: ""
            },
            to: {
                city: {name: ""},
                railway_station_name: "",
                datetime: ""
            },
            duration: ""
        },
        arrival: {
            _id: "",
            train: {name: ""},
            from: {
                city: {name: ""},
                railway_station_name: "",
                datetime: ""
            },
            to: {
                city: {name: ""},
                railway_station_name: "",
                datetime: ""
            },
            duration: ""
        },
    },
}

export const selectedTrainSlice = createSlice({
    name: "selectedTrain",
    initialState,
    reducers: {
        selectedTrainOptions(state, action) {
            const { value, direction } = action.payload;
            state.selectedTrain[direction as keyof typeof initialState.selectedTrain] = value;
        }
    }
})

export const { selectedTrainOptions } = selectedTrainSlice.actions;
export default selectedTrainSlice.reducer;