import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartProduct {
  id: string
  name: string,
  price: number,
  img: string,
  qnt: number
}

interface cartState{
  products: cartProduct[],
  total: number
}

const initialState: cartState = {
  products: [],
  total: 0
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      
      if (!state.products.find(product => product.id === action.payload[1])){
        state.products.push({
          id: action.payload[1],
          name: action.payload[0],
          price: action.payload[2],
          img: action.payload[3],
          qnt: 1
        })
      }

      else{
        state.products.find(product => product.id === action.payload[1])!.qnt += 1;
        
      }
      state.total = state.products.reduce((acc, product) => acc + product.price * product.qnt, 0);
    },



    remove: (state, action) => {      
      const index = state.products.findIndex(product => product.id === action.payload[0])
      const exProduct = state.products.find(product => product.id === action.payload[0]);
      if (exProduct){
        if(!(state.products[index].qnt === 1))state.products[index].qnt--;
    }
    state.total = state.products.reduce((acc, product) => acc + product.price * product.qnt, 0);
  },
  
  
  deleteItem: (state, action) => {
    const index = state.products.findIndex(product => product.id === action.payload[0])
    const exProduct = state.products.find(product => product.id === action.payload[0]);
    if (exProduct){
      state.products.splice(index, 1)}
      state.total = state.products.reduce((acc, product) => acc + product.price * product.qnt, 0);
    },
  
  
  changeQnt: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload[0])
      state.products[index].qnt = action.payload[0];
    }
    
  }
  },
)

// Action creators are generated for each case reducer function
export const { add, remove, changeQnt, deleteItem } = cartSlice.actions

export default cartSlice.reducer