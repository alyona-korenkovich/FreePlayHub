import React, { useEffect, useState } from 'react';
import styles from './GameList.module.scss';
import { Heading } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import { gameAPI } from '../../services/GameService';
import GameFilter from '../GameFilter/GameFilter';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';
import GameSorter from '../GameSorter/GameSorter';

const GameList = () => {
    const [params, setParams] = useState<TFetchGamesParams>({});
    const { data: games, refetch } = gameAPI.useFetchGamesQuery(params);

    useEffect(() => {
        refetch();
    }, [params]);

    return (
        <main className={styles.list_container}>
            <aside className={styles.list_controllers}>
                <Heading
                    as='h2'
                    fontFamily='Poppins, sans-serif'
                    fontSize='20px'
                    fontWeight='600'
                >
                    Фильтры
                </Heading>
                <GameFilter setParams={setParams} />
                <Heading
                    as='h2'
                    fontFamily='Poppins, sans-serif'
                    fontSize='20px'
                    fontWeight='600'
                >
                    Сортировка
                </Heading>
                <GameSorter setParams={setParams} />
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
                    {games &&
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
