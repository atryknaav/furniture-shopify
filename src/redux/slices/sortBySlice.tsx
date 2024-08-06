import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface sortOption { 
  option: 'name' | 'price' | 'date',
  name: string
}

const initialState: sortOption = {
  option: 'name',
  name: ''
}

export const sortBySlice = createSlice({
  name: 'sortBy',
  initialState: initialState,
  reducers: {
    changeOption: (state, action) => {
        state.option = action.payload[0];
    },
    changeName: (state, action) => {
        state.name = action.payload[0];
    }
  },
})

// Action creators are generated for each case reducer function
export const {changeOption, changeName} = sortBySlice.actions;

export default sortBySlice.reducer