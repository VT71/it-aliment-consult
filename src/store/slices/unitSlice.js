import { createSlice } from '@reduxjs/toolkit';

const unitSlice = createSlice({
    name: 'unitSlice',
    initialState: { unit: '', changeType: null },
    reducers: {
        setUnit(state, action) {
            state.unit = action.payload.unit;
            state.changeType = action.payload.changeType;
        },
    },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;
