import React, { useCallback, useEffect, useRef, useState } from 'react';
import GameList from '../../components/GameList/GameList';
import { TGameList } from '../../types/TGameList';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';
import { GAMES_PER_PAGE } from '../../config/const';
import { gameAPI } from '../../services/GameService';
import { TQueryActionCreatorResult } from '../../types/TQueryActionCreatorResult';

const MainPage = () => {
    const [currentPromise, setCurrentPromise] =
        useState<TQueryActionCreatorResult | null>(null);
    const endOfListRef: React.RefObject<HTMLDivElement> = useRef(null);
    const [visibleGamesCnt, setVisibleGamesCnt] = useState<number>(10);
    const [params, setParams] = useState<TFetchGamesParams>({});
    const [noResults, setNoResults] = useState<boolean>(false);

    const [fetchGames, { data: games, error, isLoading }] =
        gameAPI.useLazyFetchGamesQuery();

    const handleScroll = useCallback(() => {
        if (
            endOfListRef.current &&
            window.innerHeight + window.scrollY >=
                endOfListRef.current.offsetTop +
                    endOfListRef.current.offsetHeight
        ) {
            setVisibleGamesCnt(
                (prevVisibleGamesCnt) => prevVisibleGamesCnt + GAMES_PER_PAGE,
            );
        }
    }, []);

    const abortCurrentPromise = () => {
        if (currentPromise) {
            currentPromise.abort();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, handleScroll]);

    useEffect(() => {
        return () => {
            abortCurrentPromise();
        };
    }, [currentPromise]);

    useEffect(() => {
        abortCurrentPromise();

        const promise = fetchGames(params);
        setCurrentPromise(promise);
    }, [params]);

    useEffect(() => {
        if (games && Array.isArray(games)) {
            setNoResults(false);
        } else if (games && typeof games === 'object' && games.status === 0) {
            setNoResults(true);
        }
    }, [games]);

    const config: TGameList = {
        isLoading: isLoading,
        error: noResults || Boolean(error),
        games: Array.isArray(games) ? games.slice(0, visibleGamesCnt) : [],
        setParams: setParams,
        endOfListRef: endOfListRef,
    };

    return <GameList {...config} />;
};

export default MainPage;
