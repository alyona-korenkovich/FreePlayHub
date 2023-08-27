import { TGame } from '../../types/TGame';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TCachedGame = {
    [id: string]: {
        timestamp: number;
        gameDetails: TGame;
    };
};

const GamesCacheInitialState = {
    cachedGames: {} as TCachedGame,
};

export const gamesCacheSlice = createSlice({
    name: 'gamesCache',
    initialState: GamesCacheInitialState,
    reducers: {
        cacheGame(state, action: PayloadAction<TGame>) {
            const { id } = action.payload;

            state.cachedGames[id] = {
                timestamp: Date.now(),
                gameDetails: action.payload,
            };
        },
        removeGameFromCache(state, action: PayloadAction<string>) {
            delete state.cachedGames[action.payload];
        },
    },
});

export default gamesCacheSlice.reducer;
