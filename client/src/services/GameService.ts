import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TGame } from '../types/TGame';
import { API_URL } from '../config/const';

export const gameAPI = createApi({
    reducerPath: 'gameAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        fetchLiveGamesList: build.query<TGame[], undefined>({
            query: () => ({
                url: `/games`,
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }),
        }),
        fetchGameDetails: build.query<TGame, string>({
            query: (id: string) => ({
                url: '/game',
                params: {
                    id: id,
                },
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }),
        }),
    }),
});
