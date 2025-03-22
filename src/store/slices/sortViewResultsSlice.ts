import { createSlice } from "@reduxjs/toolkit";

interface ISearchResults {
    limit: number;
    currentPage: number;
    offset: number;
    sort: {
        title: string;
        value: string;
    }
}

const initialState: ISearchResults = {
    limit: 5,
    currentPage: 1,
    offset: 0,
    sort: {
        title: 'времени',
        value: 'date'
    }
}

export const sortViewResultsSlice = createSlice({
    name: "sortViewResults",
    initialState,
    reducers: {
        resultsLimit: (state, action) => {
            state.limit = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        changeOffset: (state, action) => {
            state.offset = action.payload;
        },
        sortResults: (state, action) => {
            state.sort = action.payload;
        }
    }
})

export const { 
    resultsLimit, 
    setCurrentPage, 
    changeOffset, 
    sortResults } = sortViewResultsSlice.actions;
export default sortViewResultsSlice.reducer;