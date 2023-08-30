import React, { useState } from 'react';
import { Sorts } from '../../const/sorts';
import { TFetchGamesParams } from '../../types/TFetchGamesParams';
import { isValidSort } from '../../utils/isValidSort';
import { FormLabel, Select, VisuallyHidden } from '@chakra-ui/react';

type TGameFilter = {
    setParams: React.Dispatch<React.SetStateAction<TFetchGamesParams>>;
};

const sorts = Object.keys(Sorts);

const GameSorter = ({ setParams }: TGameFilter) => {
    const [selectedSort, setSelectedSort] = useState<Sorts>(
        Sorts['release-data'],
    );

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sort = event.target.value;
        if (isValidSort(sort)) setSelectedSort(sort as Sorts);
        else setSelectedSort(Sorts['release-data']);

        setParams((prevState) => ({
            ...prevState,
            'sort-by': sort as Sorts,
        }));
    };

    return (
        <>
            <section className='sort'>
                <FormLabel htmlFor='platformSelect'>
                    <VisuallyHidden>Сортировка</VisuallyHidden>
                </FormLabel>
                <Select
                    id='platformSelect'
                    data-testid='games_sorter'
                    cursor='pointer'
                    value={selectedSort}
                    onChange={handleSortChange}
                >
                    {sorts.map((option) => (
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

export default GameSorter;
