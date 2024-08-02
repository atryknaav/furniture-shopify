import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export const showMenuSlice = createSlice({
  name: 'showMenu',
  initialState: false,
  reducers: {
    toggleMenu: (state) => {
        return !state;
    }
  },
})

// Action creators are generated for each case reducer function
export const {toggleMenu} = showMenuSlice.actions;

export default showMenuSlice.reducer