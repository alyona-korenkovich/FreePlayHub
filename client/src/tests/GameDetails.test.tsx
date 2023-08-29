import GameDetails from '../components/GameDetails/GameDetails';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TGameDetails } from '../types/TGameDetails';

const mockGameDetailsReady: TGameDetails = {
    isLoading: false,
    error: false,
    details: {
        id: 521,
        title: 'Diablo Immortal',
        thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
        status: 'Live',
        short_description:
            'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
        description:
            'The demon fighting doesn’t have to stop when you walk away from the computer thanks to Blizzard Entertainment’s Diablo Immortal. Built for mobile and also released on PC, the game fills in the gaps between Diablo II and III in an MMOARPG environment.\r\n\r\nDiablo Immortal picks up following the presumed death of the Archangel Tyrael, during which time mankind must deal with the fallout. One of the many problems are the fragments of the shattered Worldstone spread across the land, waiting for Diablo’s underlings to collect them in an attempt to bring about his return.\r\n\r\nPlayers can choose from one of six classes in Diablo Immortal. These are the classic Barbarian, the Crusader, the Demon Hunter, the Monk, the Necromancer, and the Wizard. All six classes features their own unique skills and abilities.\r\n\r\nThe game also introduces six new bosses, ranging from The Skeleton King to the Glacial Colossus. Each offers players a unique challenge, and all are found in places filled with danger. So, players will want to be well prepared before taking them on.\r\n',
        game_url: 'https://www.freetogame.com/open/diablo-immortal',
        genre: 'MMOARPG',
        platform: 'Windows',
        publisher: 'Blizzard Entertainment',
        developer: 'Blizzard Entertainment',
        release_date: '2022-06-02',
        freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
        minimum_system_requirements: {
            os: 'Windows 7 / Windows 8 / Windows 10 / Windows 11 (64-bit)',
            processor: 'Intel Core i3 or AMD FX-8100',
            memory: '4 GB RAM',
            graphics:
                'NVIDIA GeForce GTX 460, ATI Radeon HD 6850 or Intel HD Graphics 530',
            storage: '?',
        },
        screenshots: [
            {
                id: 1277,
                image: 'https://www.freetogame.com/g/521/diablo-immortal-1.jpg',
            },
            {
                id: 1278,
                image: 'https://www.freetogame.com/g/521/diablo-immortal-2.jpg',
            },
            {
                id: 1279,
                image: 'https://www.freetogame.com/g/521/diablo-immortal-3.jpg',
            },
        ],
    },
};

const mockGameDetailsLoading: TGameDetails = {
    isLoading: true,
    error: false,
    details: undefined,
};

const mockGameDetailsError = {
    isLoading: false,
    error: true,
    details: undefined,
};

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('GameDetails tests', () => {
    test('renders GameDetails component correctly when details are ready', () => {
        render(
            <MemoryRouter>
                <GameDetails {...mockGameDetailsReady} />
            </MemoryRouter>,
        );

        const titleElement = screen.getByText('Diablo Immortal');
        const releaseDateElement = screen.getByText('02.06.2022');
        const genreElement = screen.getByText('MMOARPG');
        const developerElement = screen.getByTestId('developer');
        const publisherElement = screen.getByTestId('publisher');
        const osElement = screen.getByText(
            'Windows 7 / Windows 8 / Windows 10 / Windows 11 (64-bit)',
        );
        const processorElement = screen.getByText(
            'Intel Core i3 or AMD FX-8100',
        );
        const memoryElement = screen.getByText('4 GB RAM');
        const graphicsElement = screen.getByText(
            'NVIDIA GeForce GTX 460, ATI Radeon HD 6850 or Intel HD Graphics 530',
        );
        const storageElement = screen.getByText('?');
        const screenshotCarousel = screen.getByTestId('screenshot-carousel');

        expect(titleElement).toBeInTheDocument();
        expect(releaseDateElement).toBeInTheDocument();
        expect(genreElement).toBeInTheDocument();
        expect(developerElement).toBeInTheDocument();
        expect(publisherElement).toBeInTheDocument();
        expect(developerElement).toHaveTextContent('Blizzard Entertainment');
        expect(publisherElement).toHaveTextContent('Blizzard Entertainment');
        expect(osElement).toBeInTheDocument();
        expect(processorElement).toBeInTheDocument();
        expect(memoryElement).toBeInTheDocument();
        expect(graphicsElement).toBeInTheDocument();
        expect(storageElement).toBeInTheDocument();
        expect(screenshotCarousel).toBeInTheDocument();
    });

    test('renders GameDetails component correctly when details are loading', () => {
        render(
            <MemoryRouter>
                <GameDetails {...mockGameDetailsLoading} />
            </MemoryRouter>,
        );

        const loadingMessage = screen.getByText('Загрузка');
        expect(loadingMessage);
    });

    test('renders GameDetails component correctly when there is an error', () => {
        render(
            <MemoryRouter>
                <GameDetails {...mockGameDetailsError} />
            </MemoryRouter>,
        );

        const errorMessage = screen.getByText('Произошла ошибка при загрузке');
        expect(errorMessage);
    });

    test('navigates to games list on button click', () => {
        mockUseNavigate.mockReturnValue(jest.fn());

        render(
            <MemoryRouter>
                <GameDetails {...mockGameDetailsError} />
            </MemoryRouter>,
        );

        const backButton = screen.getByRole('button', {
            name: /Назад к списку игр/i,
        });
        fireEvent.click(backButton);

        expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
});
