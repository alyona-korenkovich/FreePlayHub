import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import GameList from '../components/GameList/GameList';
import { MemoryRouter } from 'react-router-dom';
import { ReduxProvider } from '../providers/Redux.provider';

beforeEach(() => {
    render(
        <ReduxProvider>
            <MemoryRouter>
                <GameList />
            </MemoryRouter>
        </ReduxProvider>,
    );
});

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('GameList tests', () => {
    it('renders the game list component', async () => {
        const filtersHeading = screen.getByText('Фильтры');
        const sortHeading = screen.getByRole('heading', {
            name: /Сортировка/i,
        });
        const gamesHeading = screen.getByText('Список игр');
        const loadingText = screen.getByText('Загрузка');

        expect(filtersHeading).toBeInTheDocument();
        expect(sortHeading).toBeInTheDocument();
        expect(gamesHeading).toBeInTheDocument();
        expect(loadingText).toBeInTheDocument();

        await waitFor(() => screen.getAllByTestId('card-container')[0]);

        expect(screen.getByText('Overwatch 2')).toBeInTheDocument();
    });

    it('it changes on filter/sorting manipulations', async () => {
        await waitFor(() => screen.getAllByTestId('card-container')[0]);

        const platformSelect = screen.getByTestId('platforms-selector');
        fireEvent.change(platformSelect, { target: { value: 'browser' } });

        await waitFor(() => screen.getAllByTestId('card-container')[0]);
        expect(screen.queryByText('Overwatch 2')).not.toBeInTheDocument();
    });

    it('renders error when server responds with 404', async () => {
        await waitFor(() => screen.getAllByTestId('card-container')[0]);

        const platformSelect = screen.getByTestId('platforms-selector');
        const genreSelect = screen.getByTestId('genres-selector');

        fireEvent.change(platformSelect, { target: { value: 'browser' } });
        fireEvent.change(genreSelect, { target: { value: 'tower-defense' } });

        await waitFor(() =>
            screen.getByText('Произошла ошибка при загрузке данных'),
        );
        expect(screen.getByText('Произошла ошибка при загрузке данных'));
    }, 10000);

    it('redirects when clicking on GameCard', async () => {
        mockUseNavigate.mockReturnValue(jest.fn());

        await waitFor(() => screen.getAllByTestId('card-container')[0]);
        const cardContainer = screen.getAllByTestId('card-container')[0];
        fireEvent.click(cardContainer);
        expect(mockUseNavigate).toHaveBeenCalledWith('/game/540');
    });
});
