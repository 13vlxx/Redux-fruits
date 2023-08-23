import { configureStore } from "@reduxjs/toolkit";

import fruits from "./features/fruits";
import fruitsCart from "./features/fruitsCart";

export const store = configureStore({
  reducer: {
    fruits,
    fruitsCart,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// function customMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       //   console.log(store.getState());
//       //   console.log(next);
//       //   console.log(action);
//       next({
//         type: "fruitsCart/addOne",
//         payload: {
//           name: "Mango",
//           price: 999,
//         },
//       });
//     };
//   };
// }
