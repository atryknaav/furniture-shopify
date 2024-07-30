import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export const showCartSlice = createSlice({
  name: 'showCart',
  initialState: false,
  reducers: {
    toggle: (state) => {
        return !state;
    }
  },
})

// Action creators are generated for each case reducer function
export const {toggle} = showCartSlice.actions;

export default showCartSlice.reducer