import { createSlice } from "@reduxjs/toolkit";

interface ITrainOptions {
    options: {
        firstClass: boolean;
        secondClass: boolean;
        thirdClass: boolean;
        fourthClass: boolean;
        haveWifi: boolean;
        isExpress: boolean;
    }
    ticketCost: {
        from: number;
        to: number;
    },
    time: {
        there: {
            departure: {
                from: number;
                to: number;
            },
            arrival: {
                from: number;
                to: number;
            }
        },
        back: {
            departure: {
                from: number;
                to: number;
            },
            arrival: {
                from: number;
                to: number;
            }
        }
    },
    timeChoosingSection: {
        thereSection: boolean;
        backSection: boolean;
    }
}

const initialState: ITrainOptions = {
    options: {
        firstClass: false,
        secondClass: false,
        thirdClass: false,
        fourthClass: false,
        haveWifi: false,
        isExpress: false
    },
    ticketCost: {
        from: 0,
        to: 10000
    },
    time: {
        there: {
            departure: {
                from: 0,
                to: 1439
            },
            arrival: {
                from: 0,
                to: 1439
            }
        },
        back: {
            departure: {
                from: 0,
                to: 1439
            },
            arrival: {
                from: 0,
                to: 1439
            }
        }
    },
    timeChoosingSection: {
        thereSection: false,
        backSection: false
    }
}

export const trainsParamsSlice = createSlice ({
    name: "trainsParams",
    initialState,
    reducers: {
        changeOption(state, action) {
            const { name, value } = action.payload;
            state.options[name as keyof typeof initialState.options] = value;
        },
        changeMinCost(state, action) {
            state.ticketCost.from = action.payload;
        },
        changeMaxCost(state, action) {
            state.ticketCost.to = action.payload;
        },
        changeTimeThereDepartureFrom(state, action) {
            state.time.there.departure.from = action.payload;
        },
        changeTimeThereDepartureTo(state, action) {
            state.time.there.departure.to = action.payload;
        },
        changeTimeThereArrivalFrom(state, action) {
            state.time.there.arrival.from = action.payload;
        },
        changeTimeThereArrivalTo(state, action) {
            state.time.there.arrival.to = action.payload;
        },
        changeTimeBackDepartureFrom(state, action) {
            state.time.back.departure.from = action.payload;
        },
        changeTimeBackDepartureTo(state, action) {
            state.time.back.departure.to = action.payload;
        },
        changeTimeBackArrivalFrom(state, action) {
            state.time.back.arrival.from = action.payload;
        },
        changeTimeBackArrivalTo(state, action) {
            state.time.back.arrival.to = action.payload;
        },
        timeChoosingSectionState(state, action) {
            const { directionSection, value } = action.payload;
            state.timeChoosingSection[directionSection as keyof typeof initialState.timeChoosingSection] = value;
        },
    }
})

export const {
    changeOption, 
    changeMinCost, 
    changeMaxCost, 
    changeTimeThereDepartureFrom, 
    changeTimeThereDepartureTo,
    changeTimeThereArrivalFrom,
    changeTimeThereArrivalTo,
    changeTimeBackDepartureFrom,
    changeTimeBackDepartureTo,
    changeTimeBackArrivalFrom,
    changeTimeBackArrivalTo,
    timeChoosingSectionState
} = trainsParamsSlice.actions;
export default trainsParamsSlice.reducer;