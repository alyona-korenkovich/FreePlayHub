import {
    createApi,
    fetchBaseQuery,
    retry,
} from '@reduxjs/toolkit/dist/query/react';
import { TGame } from '../types/TGame';
import { API_URL } from '../config/const';
import { TFetchGamesParams } from '../types/TFetchGamesParams';
import { TFetchGameParams } from '../types/TFetchGameParams';

const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: API_URL }), {
    maxRetries: 3,
});

export const gameAPI = createApi({
    reducerPath: 'gameAPI',
    baseQuery: staggeredBaseQuery,
    endpoints: (build) => ({
        fetchGames: build.query<TGame[], TFetchGamesParams>({
            query: (params: TFetchGamesParams) => ({
                url: '/',
                params: params,
            }),
        }),
        fetchGameDetails: build.query<TGame, TFetchGameParams>({
            query: (params: TFetchGameParams) => ({
                url: '/game',
                params: params,
            }),
        }),
    }),
});
