import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameAPI } from '../services/GameService';
import gamesCache from './reducers/GamesCacheSlice';

const rootReducer = combineReducers({
    gamesCache,
    [gameAPI.reducerPath]: gameAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(gameAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
