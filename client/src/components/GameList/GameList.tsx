import React from 'react';
import styles from './GameList.module.scss';
import { Heading, Text } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import GameFilter from '../GameFilter/GameFilter';
import GameSorter from '../GameSorter/GameSorter';
import Loader from '../Loader/Loader';
import { TGameList } from '../../types/TGameList';

const GameList = ({
    isLoading,
    error,
    games,
    setParams,
    endOfListRef,
}: TGameList) => {
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
                    {error && (
                        <Text color='red'>
                            Произошла ошибка при загрузке данных
                        </Text>
                    )}
                    {games &&
                        games.map((game) => (
                            <GameCard
                                key={game.id}
                                {...game}
                            />
                        ))}
                    <div
                        data-testid={'End of list div'}
                        ref={endOfListRef}
                    />
                </div>
            </section>
        </main>
    );
};

export default GameList;
