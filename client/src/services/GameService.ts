import {
    createApi,
    fetchBaseQuery,
    retry,
} from '@reduxjs/toolkit/dist/query/react';
import { TGame } from '../types/TGame';
import { API_URL } from '../config/const';
import { TFetchGamesParams } from '../types/TFetchGamesParams';
import { TFetchGameParams } from '../types/TFetchGameParams';
import { TNoResults } from '../types/TNoResults';

const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: API_URL }), {
    maxRetries: 3,
});

export const gameAPI = createApi({
    reducerPath: 'gameAPI',
    baseQuery: staggeredBaseQuery,
    endpoints: (build) => ({
        fetchGames: build.query<TGame[] | TNoResults, TFetchGamesParams>({
            query: (params: TFetchGamesParams) => ({
                url: '/games',
                params: params,
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }),
        }),
        fetchGameDetails: build.query<TGame, TFetchGameParams>({
            query: (params: TFetchGameParams) => ({
                url: '/game',
                params: params,
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }),
        }),
    }),
});
