import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameAPI } from '../services/GameService';

const rootReducer = combineReducers({
    [gameAPI.reducerPath]: gameAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(gameAPI.middleware),
    });
};
