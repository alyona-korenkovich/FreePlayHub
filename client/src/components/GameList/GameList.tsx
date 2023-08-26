import React from 'react';
import styles from './GameList.module.scss';
import { Heading } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import { gameAPI } from '../../services/GameService';

const GameList = () => {
    const { data: games } = gameAPI.useFetchLiveGamesListQuery(undefined);

    return (
        <main className={styles.list_container}>
            <aside className={styles.list_controllers}>
                <div className={styles.controllers_filters}>Filters</div>
                <div className={styles.controllers_sorters}>Sort</div>
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
