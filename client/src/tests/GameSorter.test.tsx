import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GameSorter from '../components/GameSorter/GameSorter';

const setParamsMock = jest.fn();
describe('GameFilter tests', () => {
    test('renders GameFilter component', () => {
        render(<GameSorter setParams={setParamsMock} />);

        const sorterSelect = screen.getByTestId('games_sorter');

        expect(sorterSelect).toBeInTheDocument();
    });

    test('selecting sort option updates state and params', () => {
        render(<GameSorter setParams={setParamsMock} />);

        const sorterSelect = screen.getByTestId('games_sorter');

        fireEvent.change(sorterSelect, { target: { value: 'relevance' } });

        expect(sorterSelect).toHaveValue('relevance');
        expect(setParamsMock).toHaveBeenCalledTimes(1);
    });
});
