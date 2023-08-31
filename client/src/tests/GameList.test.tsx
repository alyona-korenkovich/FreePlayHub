import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameList from '../components/GameList/GameList';
import { MemoryRouter } from 'react-router-dom';
import { TGameList } from '../types/TGameList';
import { allGames } from './mocks';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

const mockedGameListReady: TGameList = {
    isLoading: false,
    error: undefined,
    games: allGames,
    setParams: () => {},
    endOfListRef: undefined,
};

const mockedGameListLoading: TGameList = {
    isLoading: true,
    error: undefined,
    games: undefined,
    setParams: () => {},
    endOfListRef: undefined,
};

const mockedGameListError: TGameList = {
    isLoading: false,
    error: {
        status: 404,
        data: 'Not found',
    } as FetchBaseQueryError,
    games: undefined,
    setParams: () => {},
    endOfListRef: undefined,
};

describe('GameList tests', () => {
    it('renders the game list component', async () => {
        render(
            <MemoryRouter>
                <GameList {...mockedGameListReady} />
            </MemoryRouter>,
        );

        const filtersHeading = screen.getByText('Фильтры');
        const sortHeading = screen.getByRole('heading', {
            name: /Сортировка/i,
        });
        const gamesHeading = screen.getByText('Список игр');
        const endOfListDiv = screen.getByTestId('End of list div');

        expect(filtersHeading).toBeInTheDocument();
        expect(sortHeading).toBeInTheDocument();
        expect(gamesHeading).toBeInTheDocument();
        expect(endOfListDiv).toBeInTheDocument();

        expect(screen.getByText('Overwatch 2')).toBeInTheDocument();
        expect(screen.getAllByTestId('card-container').length).toEqual(5);
    });

    it('renders loading message', async () => {
        render(
            <MemoryRouter>
                <GameList {...mockedGameListLoading} />
            </MemoryRouter>,
        );

        expect(screen.getByText('Загрузка'));
    });

    it('renders error when server responds with 404', async () => {
        render(
            <MemoryRouter>
                <GameList {...mockedGameListError} />
            </MemoryRouter>,
        );

        expect(screen.getByText('Произошла ошибка при загрузке данных'));
    });

    it('redirects when clicking on GameCard', async () => {
        render(
            <MemoryRouter>
                <GameList {...mockedGameListReady} />
            </MemoryRouter>,
        );
        mockUseNavigate.mockReturnValue(jest.fn());

        const cardContainer = screen.getAllByTestId('card-container')[0];
        userEvent.click(cardContainer);
        expect(mockUseNavigate).toHaveBeenCalledWith('/game/540');
    });
});
