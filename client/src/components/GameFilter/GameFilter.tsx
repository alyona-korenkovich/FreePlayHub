import React, { useState } from 'react';
import { Platforms } from '../../const/platforms';
import { Genres } from '../../const/genres';
import { FormLabel, Select } from '@chakra-ui/react';
import { isValidPlatform } from '../../utils/isValidPlatform';
import { isValidGenre } from '../../utils/isValidGenre';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';

type TGameFilter = {
    setParams: React.Dispatch<React.SetStateAction<TFetchGamesParams>>;
};

const platforms = Object.keys(Platforms);
const genres = Object.keys(Genres);

const GameFilter = ({ setParams }: TGameFilter) => {
    const [selectedPlatform, setSelectedPlatform] = useState<Platforms>(
        Platforms.all,
    );
    const [selectedGenre, setSelectedGenre] = useState<Genres | 'all'>('all');

    const handlePlatformChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const platform = event.target.value;
        if (isValidPlatform(platform)) setSelectedPlatform(platform);
        else setSelectedPlatform(Platforms.all);

        setParams((prevState) => ({
            ...prevState,
            platform: platform as Platforms,
        }));
    };

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genre = event.target.value;

        if (isValidGenre(genre)) {
            setSelectedGenre(genre as Genres);
            setParams((prevState) => ({
                ...prevState,
                category: genre as Genres,
            }));
        } else {
            setSelectedGenre('all');
            // delete "category" parameter from request parameters
            setParams((prevState) => {
                const { category, ...otherParams } = prevState;
                return otherParams;
            });
        }
    };

    return (
        <>
            <section className='filter_platforms'>
                <FormLabel>Платформы:</FormLabel>
                <Select
                    value={selectedPlatform}
                    onChange={handlePlatformChange}
                >
                    {platforms.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </Select>
            </section>
            <section className='filter_genres'>
                <FormLabel>Жанры</FormLabel>
                <Select
                    value={selectedGenre}
                    onChange={handleGenreChange}
                >
                    <option
                        key='all'
                        value='all'
                    >
                        all
                    </option>
                    {genres.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </Select>
            </section>
        </>
    );
};

export default GameFilter;
