import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GameCard from '../components/GameCard/GameCard';

const mockGame = {
    id: 1,
    title: 'Test Game',
    thumbnail: '../public/logo64.png',
    publisher: 'Test Publisher',
    genre: 'Test Genre',
    release_date: '2023-08-29',
};

const mockGameWOThumbnail = {
    id: 1,
    title: 'Test Game',
    thumbnail: '',
    publisher: 'Test Publisher',
    genre: 'Test Genre',
    release_date: '2023-08-29',
};

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('GameCard unit tests', () => {
    test('renders GameCard component correctly', () => {
        render(
            <MemoryRouter>
                <GameCard {...mockGame} />
            </MemoryRouter>,
        );

        const titleElement = screen.getByText('Test Game');
        const genreElement = screen.getByText('Test Genre');
        const publisherElement = screen.getByText('Test Publisher');
        const releaseDate = screen.getByText('29.08.2023');
        const thumbnail = screen.getByAltText('Game thumbnail');

        expect(titleElement).toBeInTheDocument();
        expect(genreElement).toBeInTheDocument();
        expect(publisherElement).toBeInTheDocument();
        expect(releaseDate).toBeInTheDocument();
        expect(thumbnail).toBeInTheDocument();
    });

    test('renders GameCard component without thumbnail', () => {
        render(
            <MemoryRouter>
                <GameCard {...mockGameWOThumbnail} />
            </MemoryRouter>,
        );

        const titleElement = screen.getByText('Test Game');
        const genreElement = screen.getByText('Test Genre');
        const altText = screen.getByAltText('Game thumbnail');
        const publisherElement = screen.getByText('Test Publisher');
        const releaseDate = screen.getByText('29.08.2023');

        expect(titleElement).toBeInTheDocument();
        expect(genreElement).toBeInTheDocument();
        expect(publisherElement).toBeInTheDocument();
        expect(releaseDate).toBeInTheDocument();
        expect(altText).toBeInTheDocument();
    });

    test('navigates to game details on click', () => {
        mockUseNavigate.mockReturnValue(jest.fn());

        render(
            <MemoryRouter>
                <GameCard {...mockGame} />
            </MemoryRouter>,
        );

        const cardContainer = screen.getByTestId('card-container');
        fireEvent.click(cardContainer);

        expect(mockUseNavigate).toHaveBeenCalledWith('/game/1');
    });
});
