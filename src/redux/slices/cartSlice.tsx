import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartProduct {
  id: string
  name: string,
  price: string,
  qnt: Number
}

interface cartState{
  products: cartProduct[]
}

const initialState: cartState = {
  products: []
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
    
      state.products.push({
        id: action.payload[1],
        name: action.payload[0],
        price: action.payload[2],
        qnt: 1
      })
    },
    remove: (state, action) => {
      console.log('Clicked')
      
      const index = state.products.findIndex(product => product.id === action.payload.id)
 
        state.products.splice(index, 1)
    
  }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer