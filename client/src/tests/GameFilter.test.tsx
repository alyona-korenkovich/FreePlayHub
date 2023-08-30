import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GameFilter from '../components/GameFilter/GameFilter';

const setParamsMock = jest.fn();
describe('GameFilter tests', () => {
    test('renders GameFilter component', () => {
        render(<GameFilter setParams={setParamsMock} />);

        const platformLabel = screen.getByText('Платформы');
        const genreLabel = screen.getByText('Жанры');

        const platformSelect = screen.getByTestId('platforms-selector');
        const genreSelect = screen.getByTestId('genres-selector');

        expect(platformLabel).toBeInTheDocument();
        expect(genreLabel).toBeInTheDocument();
        expect(platformSelect).toBeInTheDocument();
        expect(genreSelect).toBeInTheDocument();
    });

    test('selecting platform updates state and params', () => {
        render(<GameFilter setParams={setParamsMock} />);

        const platformSelect = screen.getByTestId('platforms-selector');

        fireEvent.change(platformSelect, { target: { value: 'pc' } });

        expect(platformSelect).toHaveValue('pc');
        expect(setParamsMock).toHaveBeenCalledTimes(1);
    });

    test('selecting genre updates state and params', () => {
        render(<GameFilter setParams={setParamsMock} />);

        const genreSelect = screen.getByTestId('genres-selector');

        fireEvent.change(genreSelect, { target: { value: 'mmorpg' } });

        expect(genreSelect).toHaveValue('mmorpg');
        expect(setParamsMock).toHaveBeenCalledTimes(1);
    });
});
