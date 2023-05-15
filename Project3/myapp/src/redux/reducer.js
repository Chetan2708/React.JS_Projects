import { createReducer } from "@reduxjs/toolkit";

//If any items present in cart it gets that from local storage or makes it an empty array 
const initialState = {
  cartitems: JSON.parse(localStorage.getItem("cartitems")) || [],
  subtotal: JSON.parse(localStorage.getItem("subtotal")) || 0,
  shipping: JSON.parse(localStorage.getItem("shipping")) || 0,
  tax: JSON.parse(localStorage.getItem("tax")) || 0,
  Total: JSON.parse(localStorage.getItem("total")) || 0,
};


export const first = createReducer(initialState, {
  // Add the selected item to the cart
  addToCart: (state, action) => {
    const item = action.payload; // Get the selected item
    const itemExist = state.cartitems.find((i) => i.id === item.id); // Check if the item already exists in the cart

    // If the item exists, increment its quantity
    if (itemExist) {
      state.cartitems.forEach((i) => {
        if (i.id === item.id) i.quantity += 1;
      });
    } 
    // If the item does not exist, add it to the cart
    else {
      state.cartitems.push(item);
    }

    // Save the updated cart items to local storage
    localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
  },

  // Decrement the quantity of the selected item in the cart
  decrement: (state, action) => {
    const item = state.cartitems.find((i) => i.id === action.payload); // Get the selected item

    // If the item quantity is greater than 1, decrement its quantity
    if (item.quantity > 1) {
      state.cartitems.forEach((i) => {
        if (i.id === item.id) i.quantity -= 1;
      });
    } 
    // If the item quantity is 1, remove it from the cart
    else {
      state.cartitems = state.cartitems.filter((i) => i.id !== action.payload);
    }

    // Save the updated cart items to local storage
    localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
  },

  // Remove the selected item from the cart
  delete: (state, action) => {
    state.cartitems = state.cartitems.filter((i) => i.id !== action.payload); // Remove the selected item from the cart

    // Save the updated cart items to local storage
    localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
  },

  calculatePrice: (state) => {
    let sum = 0;
    state.cartitems.forEach((i) => (sum += i.price * i.quantity));   // Calculate the total price of the items in the cart
    state.subtotal = sum;
    state.shipping = state.subtotal > 1000 ? 0 : 200;               // Calculate the shipping cost based on the subtotal
    state.tax = +(state.subtotal * 0.18).toFixed();                  // Calculate the tax (GST 18%) +using because tofixed will return string and +will convert it back into a number
    state.Total = state.subtotal + state.tax + state.shipping;
    localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
    // setting all of them again so that they are not lost when we refresh 
    localStorage.setItem("subtotal", JSON.stringify(state.subtotal));
    localStorage.setItem("shipping", JSON.stringify(state.shipping));
    localStorage.setItem("tax", JSON.stringify(state.tax));
    localStorage.setItem("total", JSON.stringify(state.Total));
},
});

