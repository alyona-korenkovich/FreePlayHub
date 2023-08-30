import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import GameCard from '../components/GameCard/GameCard';
import { MemoryRouter } from 'react-router-dom';
import { TGameDetails } from '../types/TGameDetails';
import GameDetails from '../components/GameDetails/GameDetails';
import GameSorter from '../components/GameSorter/GameSorter';
import GameFilter from '../components/GameFilter/GameFilter';
import ScreenshotCarousel from '../components/ScreenshotCarousel/ScreenshotCarousel';
import GameList from '../components/GameList/GameList';
import { ReduxProvider } from '../providers/Redux.provider';
import { TGameList } from '../types/TGameList';
import { allGames } from './mocks';

describe('a11y tests for components', () => {
    test('GameCard component has no accessibility violations', async () => {
        const mockGame = {
            id: 1,
            title: 'Test Game',
            thumbnail: '../public/logo64.png',
            publisher: 'Test Publisher',
            genre: 'Test Genre',
            release_date: '2023-08-29',
        };

        const { container } = render(
            <MemoryRouter>
                <GameCard {...mockGame} />
            </MemoryRouter>,
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('GameDetails component has no accessibility violations', async () => {
        const mockGameDetails: TGameDetails = {
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
                freetogame_profile_url:
                    'https://www.freetogame.com/diablo-immortal',
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

        const { container } = render(
            <MemoryRouter>
                <GameDetails {...mockGameDetails} />
            </MemoryRouter>,
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('GameFilter has no accessibility violations', async () => {
        const setParamsMock = jest.fn();

        const { container } = render(<GameFilter setParams={setParamsMock} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('GameSorter has no accessibility violations', async () => {
        const setParamsMock = jest.fn();

        const { container } = render(<GameSorter setParams={setParamsMock} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('Screenshot carousel has no accessibility violations', async () => {
        const screenshotsMock = [
            { id: 1, image: 'image1.jpg' },
            { id: 2, image: 'image2.jpg' },
            { id: 3, image: 'image3.jpg' },
        ];

        const { container } = render(
            <ScreenshotCarousel screenshots={screenshotsMock} />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('GameList has no accessibility violations', async () => {
        const mockedGameListReady: TGameList = {
            isLoading: false,
            error: false,
            games: allGames,
            setParams: () => {},
            endOfListRef: undefined,
        };

        const { container } = render(
            <ReduxProvider>
                <MemoryRouter>
                    <GameList {...mockedGameListReady} />
                </MemoryRouter>
            </ReduxProvider>,
        );

        await waitFor(() => screen.getAllByTestId('card-container')[0]);

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
