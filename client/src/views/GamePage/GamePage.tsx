import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gameAPI } from '../../services/GameService';
import { CACHE_INVALIDATION_TIME_IN_MS } from '../../config/const';
import GameDetails from '../../components/GameDetails/GameDetails';
import { TGameDetails } from '../../types/TGameDetails';

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

    const {
        data: details,
        error,
        isLoading,
    } = gameAPI.useFetchGameDetailsQuery(
        { id: gameID! },
        { skip: cacheIsValid },
    );

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
        isLoading: cacheIsValid ? false : isLoading,
        error: Boolean(error),
        details: cacheIsValid ? cachedGame.gameDetails : details,
    };

    return <GameDetails {...config} />;
};

export default GamePage;
