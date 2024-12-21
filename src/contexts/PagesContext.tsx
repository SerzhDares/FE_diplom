import { createContext } from "react";

export interface CtxData {
    arrPages: number[];
    setArrPages: React.Dispatch<React.SetStateAction<number[]>>;
}

export const PagesContext = createContext<CtxData>({
    arrPages: [],
    setArrPages: () => {}
});