import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios"


const initialState = { 
    country: [],
    loading : false,
    message : "",
    isSuccess : false
}

export const fetchCountryList = createAsyncThunk('countrySlice/fetchCountryList', async (args,{rejectWithValue}) => {
    try {
        const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag")
        const data = response.data
        return(data)
    } catch (error) {
        rejectWithValue(error)
    }
})



const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchCountryList.pending]: (state, action) => {
            state.loading = true
        },

        [fetchCountryList.fulfilled]: (state, action) => {
            state.country = action.payload
            state.loading = false
            state.isSuccess = true
            state.message = "Success"
        },

        [fetchCountryList.rejected]: (state, action) => {
            state.loading = false
            state.isSuccess = false
            state.message = action.payload
        }
    }

    
})

export default countrySlice