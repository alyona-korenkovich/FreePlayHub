import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gameAPI } from '../../services/GameService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gamesCacheSlice } from '../../store/reducers/GamesCacheSlice';
import { CACHE_INVALIDATION_TIME_IN_MS } from '../../config/const';
import GameDetails from '../GameDetails/GameDetails';
import { TGameDetails } from '../../types/TGameDetails';

const GamePage = () => {
    const dispatch = useAppDispatch();
    const gameID = useParams().id || '0';

    const cachedGame = useAppSelector(
        (state) => state.gamesCache.cachedGames[gameID],
    );

    const cacheIsValid =
        cachedGame &&
        Date.now() - cachedGame.timestamp <= CACHE_INVALIDATION_TIME_IN_MS;

    if (!cacheIsValid) {
        dispatch(gamesCacheSlice.actions.removeGameFromCache(gameID));
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
            dispatch(gamesCacheSlice.actions.cacheGame(details));
        }
    }, [details]);

    const config: TGameDetails = {
        isLoading: cacheIsValid ? false : isLoading,
        error: Boolean(error),
        details: cacheIsValid ? cachedGame.gameDetails : details,
    };

    return <GameDetails {...config} />;
};

export default GamePage;
