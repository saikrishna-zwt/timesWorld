import { configureStore } from '@reduxjs/toolkit'
import countrySlice from "./countryListSlice";
 
const store = configureStore({
    reducer: { 
      country: countrySlice.reducer,
       }
  })
  
  export default store
