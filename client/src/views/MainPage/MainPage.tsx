import React, { useEffect, useRef, useState } from 'react';
import GameList from '../../components/GameList/GameList';
import { TGameList } from '../../types/TGameList';
import { TGame } from '../../types/TGame';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';
import { GAMES_PER_PAGE } from '../../config/const';
import { gameAPI } from '../../services/GameService';
import { TQueryActionCreatorResult } from '../../types/TQueryActionCreatorResult';

const MainPage = () => {
    const [currentPromise, setCurrentPromise] =
        useState<TQueryActionCreatorResult | null>(null);
    const endOfListRef: React.RefObject<HTMLDivElement> = useRef(null);
    const [visibleGames, setVisibleGames] = useState<TGame[]>([]);
    const [params, setParams] = useState<TFetchGamesParams>({});
    const [noResults, setNoResults] = useState<boolean>(false);

    const [fetchGames, { data: games, error, isLoading }] =
        gameAPI.useLazyFetchGamesQuery();

    const expandGameList = () => {
        if (games && Array.isArray(games)) {
            setVisibleGames((prevState) => {
                const newGamesToLoad = games.slice(
                    prevState.length,
                    prevState.length + GAMES_PER_PAGE,
                );
                const updatedState = prevState.concat(newGamesToLoad);
                return updatedState;
            });
        }
    };

    const abortCurrentPromise = () => {
        if (currentPromise) {
            currentPromise.abort();
        }
    };

    const handleScroll = () => {
        if (
            endOfListRef.current &&
            window.innerHeight + window.scrollY >=
                endOfListRef.current.offsetTop
        ) {
            expandGameList();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    useEffect(() => {
        return () => {
            abortCurrentPromise();
        };
    }, [currentPromise]);

    useEffect(() => {
        setVisibleGames([]);

        abortCurrentPromise();

        const promise = fetchGames(params);
        setCurrentPromise(promise);
    }, [params]);

    useEffect(() => {
        if (games && Array.isArray(games)) {
            expandGameList();
            setNoResults(false);
        } else if (games && typeof games === 'object' && games.status === 0) {
            setNoResults(true);
        }
    }, [games]);

    const config: TGameList = {
        isLoading: isLoading,
        error: noResults || Boolean(error),
        games: visibleGames,
        setParams: setParams,
        endOfListRef: endOfListRef,
    };

    return <GameList {...config} />;
};

export default MainPage;
