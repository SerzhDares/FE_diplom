import { createSlice } from "@reduxjs/toolkit";

interface ISelectedTrain {
    selectedTrain: {
        departure: {
            [x: string]: any;
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

const emptyData: ISelectedTrain = {
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

const savedData = localStorage.getItem('selectedTrain');

const initialState = savedData ? JSON.parse(savedData) : emptyData;

export const selectedTrainSlice = createSlice({
    name: "selectedTrain",
    initialState,
    reducers: {
        selectedTrainOptions(state, action) {
            const { value, direction } = action.payload;
            state.selectedTrain[direction as keyof typeof initialState.selectedTrain] = value;
        },
        clearTrainOptions(state) {
            state.selectedTrain = initialState.selectedTrain;
        }
    }
})

export const { selectedTrainOptions, clearTrainOptions } = selectedTrainSlice.actions;
export default selectedTrainSlice.reducer;