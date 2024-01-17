

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
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
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingWishlistItem = state.wishlistItems?.find(wish => wish.id === action.payload.id);

      if (!existingWishlistItem) {
        state.wishlistItems.push(action.payload);
      } 
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart,addToWishlist,removeFromCart,removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;
