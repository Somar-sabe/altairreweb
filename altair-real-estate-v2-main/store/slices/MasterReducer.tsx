import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Currency = {
    value: number
    label: string
}
export interface CounterState {
    types: any[]
    areas: any[]
    currencies: Currency[]
    currentCurrency: Currency
}

const initialState: CounterState = {
    types: [],
    areas: [],
    currencies: [],
    currentCurrency: { value: 1, label: 'AED' },
}

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setTypes: (state, action: PayloadAction<any[]>) => {
            state.types = action.payload
        },
        setAreas: (state, action: PayloadAction<any[]>) => {
            state.areas = action.payload
        },
        setCurrencies: (state, action: PayloadAction<Currency[]>) => {
            state.currencies = action.payload
        },
        setCurrentCurrency: (state, action: PayloadAction<Currency>) => {
            state.currentCurrency = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTypes, setAreas, setCurrencies, setCurrentCurrency } =
    masterSlice.actions

export default masterSlice.reducer
