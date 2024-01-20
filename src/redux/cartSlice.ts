

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  quantity: number;
}
export interface RemoveOptions {
  id: number;
  type: string;
}
interface WishlistItem {
  id: number;
  title: string;
  thumbnail: string,
}

interface CartState {
  items: CartItem[];
  wishlistItems: WishlistItem[];
}

const initialState: CartState = {
  items: [],
  wishlistItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      let existingItem = state.items?.find((item) => item.id === action.payload.id);
// const item= JSON.parse(JSON.stringify(existingItem))
      if (existingItem) {
        if (existingItem.quantity) {
          existingItem.quantity +=1;
          existingItem = existingItem
          console.log(action.payload.id,existingItem);

        }
        else {
          existingItem.quantity = 2;
        }
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingWishlistItem = state.wishlistItems?.find((wish) => wish.id === action.payload.id);

      if (!existingWishlistItem) {
        state.wishlistItems.push(action.payload);
      } 
    },
    removeFromCart: (state, action: PayloadAction<RemoveOptions>) => {
      const existingItem = state.items?.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0 || action.payload.type === 'remove') {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart,addToWishlist,removeFromCart,removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;
