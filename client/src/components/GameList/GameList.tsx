import React, { useEffect, useRef, useState } from 'react';
import styles from './GameList.module.scss';
import { Heading, Text } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import { gameAPI } from '../../services/GameService';
import GameFilter from '../GameFilter/GameFilter';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';
import GameSorter from '../GameSorter/GameSorter';
import Loader from '../Loader/Loader';
import { TGame } from '../../types/TGame';
import { GAMES_PER_PAGE } from '../../config/const';

const GameList = () => {
    const endOfListRef: React.RefObject<HTMLDivElement> = useRef(null);
    const [visibleGames, setVisibleGames] = useState<TGame[]>([]);
    const [params, setParams] = useState<TFetchGamesParams>({});
    const [noResults, setNoResults] = useState<boolean>(false);

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

    const handleScroll = () => {
        if (
            endOfListRef.current &&
            window.innerHeight + window.scrollY >=
                endOfListRef.current.offsetTop
        ) {
            expandGameList();
        }
    };

    const {
        data: games,
        refetch,
        error,
        isLoading,
    } = gameAPI.useFetchGamesQuery(params);

    useEffect(() => {
        setVisibleGames([]);
        refetch();
    }, [params]);

    useEffect(() => {
        if (games && Array.isArray(games)) {
            expandGameList();
            setNoResults(false);
        } else if (games && typeof games === 'object' && games.status === 0) {
            setNoResults(true);
        }
    }, [games]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
        <main className={styles.list_container}>
            <aside className={styles.list_controllers}>
                <div className={styles.controllers_filters}>
                    <Heading
                        as='h2'
                        fontFamily='Poppins, sans-serif'
                        fontSize='20px'
                        fontWeight='600'
                    >
                        Фильтры
                    </Heading>
                    <GameFilter setParams={setParams} />
                </div>
                <div className={styles.controllers_sorters}>
                    <Heading
                        as='h2'
                        fontFamily='Poppins, sans-serif'
                        fontSize='20px'
                        fontWeight='600'
                    >
                        Сортировка
                    </Heading>
                    <GameSorter setParams={setParams} />
                </div>
            </aside>
            <section className={styles.list_contents}>
                <Heading
                    as='h1'
                    fontFamily='Poppins, sans-serif'
                    fontSize='24px'
                    fontWeight='600'
                >
                    Список игр
                </Heading>
                <div className={styles.list_cards}>
                    {isLoading && <Loader />}
                    {(error || noResults) && (
                        <Text color='red'>
                            Произошла ошибка при загрузке данных
                        </Text>
                    )}
                    {visibleGames &&
                        visibleGames.map((game) => (
                            <GameCard
                                key={game.id}
                                {...game}
                            />
                        ))}
                    <div ref={endOfListRef} />
                </div>
            </section>
        </main>
    );
};

export default GameList;
