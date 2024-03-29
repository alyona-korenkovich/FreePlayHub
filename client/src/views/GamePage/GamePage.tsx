import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gameAPI } from '../../services/GameService';
import { CACHE_INVALIDATION_TIME_IN_MS } from '../../config/const';
import GameDetails from '../../components/GameDetails/GameDetails';
import { TGameDetails } from '../../types/TGameDetails';
import { TQueryActionCreatorResult } from '../../types/TQueryActionCreatorResult';

const GamePage = () => {
    const gameID = useParams().id || '0';

    const cachedGameLocalStorageKey = `cachedGame_${gameID}`;
    const cachedGameJSON = localStorage.getItem(cachedGameLocalStorageKey);
    const cachedGame = cachedGameJSON ? JSON.parse(cachedGameJSON) : null;

    const cacheIsValid =
        cachedGame &&
        Date.now() - cachedGame.timestamp <= CACHE_INVALIDATION_TIME_IN_MS;

    if (cachedGame && !cacheIsValid) {
        localStorage.removeItem(cachedGameLocalStorageKey);
    }

    const [currentPromise, setCurrentPromise] =
        useState<TQueryActionCreatorResult | null>(null);

    const [fetchGameDetails, { data: details, error, isFetching }] =
        gameAPI.useLazyFetchGameDetailsQuery();

    const abortCurrentPromise = () => {
        if (currentPromise) {
            currentPromise.abort();
        }
    };

    useEffect(() => {
        return () => {
            abortCurrentPromise();
        };
    }, [currentPromise]);

    useEffect(() => {
        if (!cacheIsValid) {
            const promise = fetchGameDetails({ id: gameID! });
            setCurrentPromise(promise);
        }
    }, [gameID]);

    useEffect(() => {
        if (details) {
            localStorage.setItem(
                cachedGameLocalStorageKey,
                JSON.stringify({
                    timestamp: Date.now(),
                    gameDetails: details,
                }),
            );
        }
    }, [details, cachedGameLocalStorageKey]);

    const config: TGameDetails = {
        isLoading: cacheIsValid ? false : isFetching,
        error: error,
        details: cacheIsValid ? cachedGame.gameDetails : details,
    };

    return <GameDetails {...config} />;
};

export default GamePage;
