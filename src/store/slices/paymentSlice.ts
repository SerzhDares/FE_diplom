import { createSlice } from "@reduxjs/toolkit";

interface IPaymentsData {
    paymentData: {
        surname: string;
        name: string;
        patronimyc: string,
        phone: string;
        email: string;
        paymentType: string;
        orderNumber: string;
    }
}

const emptyData: IPaymentsData = {
    paymentData: {
        surname: "",
        name: "",
        patronimyc: "",
        phone: "",
        email: "",
        paymentType: "",
        orderNumber: "",
    }
}

const savedData = localStorage.getItem('paymentData');

const initialState = savedData ? JSON.parse(savedData) : emptyData;

const paymentSlice = createSlice({
    name: "paymentData",
    initialState,
    reducers: {
        savePaymentData(state, action) {
            state.paymentData = action.payload;
        },
        clearPaymentData(state) {
            state.paymentData = initialState.paymentData;
        }
    }
})

export const { savePaymentData, clearPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;