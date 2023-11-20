import { createSlice } from '@reduxjs/toolkit';

const unitSlice = createSlice({
    name: 'unitSlice',
    initialState: { unit: 'Alimentație publică' },
    reducers: {
        setUnit(state, action) {
            state.unit = action.payload;
        },
    },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;
