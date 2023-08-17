import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    isLoading: null
};

const all = createAsyncThunk (
    'carsSlice/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll ();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        }
    }
)

const carsSlice = createSlice ({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [all.fulfilled]: (state, actions) => {
            state.cars=actions.payload
        }
    }

});

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    all
}

export {
    carReducer,
    carActions
}