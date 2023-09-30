import { configureStore } from '@reduxjs/toolkit';
import unitReducer from './slices/unitSlice';

export default configureStore({
    reducer: { unit: unitReducer },
});
