import React, { useEffect, useState } from 'react';
import styles from './GameList.module.scss';
import { Heading, Text } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import { gameAPI } from '../../services/GameService';
import GameFilter from '../GameFilter/GameFilter';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';
import GameSorter from '../GameSorter/GameSorter';
import Loader from '../Loader/Loader';
const GameList = () => {
    const [params, setParams] = useState<TFetchGamesParams>({});
    const [noResults, setNoResults] = useState<boolean>(false);

    const {
        data: games,
        refetch,
        error,
        isLoading,
    } = gameAPI.useFetchGamesQuery(params);

    useEffect(() => {
        refetch();
    }, [params]);

    useEffect(() => {
        if (games && Array.isArray(games)) {
            setNoResults(false);
        } else if (games && typeof games === 'object' && games.status === 0) {
            setNoResults(true);
        }
    }, [games]);

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
                    {games &&
                        Array.isArray(games) &&
                        games.map((game) => (
                            <GameCard
                                key={game.id}
                                {...game}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default GameList;
