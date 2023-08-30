import { act, renderHook } from '@testing-library/react';
import { gameAPI } from '../services/GameService';
import { ReduxProvider } from '../providers/Redux.provider';
import { Platforms } from '../const/platforms';
import { Genres } from '../const/genres';
import { setupServer } from 'msw/node';
import { handlers } from './mocks';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('gameAPI', () => {
    test('fetchGames endpoint returns data. Status: 200, response type: TGame[]', async () => {
        const expectedGames = [
            {
                id: 118,
                title: 'Starbreak',
                thumbnail: 'https://www.freetogame.com/g/118/thumbnail.jpg',
                short_description:
                    'A Roguelike MMORPG with MetroidVania-style platformer \r\ngameplay! Castlevania and Metroid fans will \r\nlove this game! ',
                game_url: 'https://www.freetogame.com/open/starbreak',
                genre: 'MMORPG',
                platform: 'PC (Windows), Web Browser',
                publisher: 'Crunchy Games',
                developer: 'Crunchy Games',
                release_date: '2016-05-10',
                freetogame_profile_url: 'https://www.freetogame.com/starbreak',
            },
            {
                id: 405,
                title: 'Pocket Starships',
                thumbnail: 'https://www.freetogame.com/g/405/thumbnail.jpg',
                short_description:
                    'A free-to-play cross-platform space combat MMO from SPYR games.',
                game_url: 'https://www.freetogame.com/open/pocket-starships',
                genre: 'Strategy',
                platform: 'Web Browser',
                publisher: 'Spyr',
                developer: 'Spyr',
                release_date: '0000-00-00',
                freetogame_profile_url:
                    'https://www.freetogame.com/pocket-starships',
            },
            {
                id: 256,
                title: 'Realm of the Mad God',
                thumbnail: 'https://www.freetogame.com/g/256/thumbnail.jpg',
                short_description:
                    'A fast paced 2d free to play MMO shooter game with a retro 8-bit style.',
                game_url: 'https://www.freetogame.com/open/realm-mad-god',
                genre: 'MMORPG',
                platform: 'PC (Windows), Web Browser',
                publisher: 'Kabam',
                developer: 'Wild Shadow Studios',
                release_date: '2012-02-21',
                freetogame_profile_url:
                    'https://www.freetogame.com/realm-mad-god',
            },
        ];

        const params = {
            platform: Platforms.browser,
            category: Genres.mmotps,
        };

        const { result } = renderHook(
            () => gameAPI.endpoints.fetchGames.useQuery(params),
            {
                wrapper: ({ children }) => (
                    <ReduxProvider>{children}</ReduxProvider>
                ),
            },
        );

        await act(async () => {
            await result.current.refetch();
        });

        expect(result.current.data).toEqual(expectedGames);
        expect(result.current.error).toBeUndefined();
    });

    test('fetchGames endpoint returns data. Status: 201, response type: TNoResult', async () => {
        const noResult = {
            status: 0,
            status_message:
                'No results available at the moment, please try again later.',
        };

        const params = {
            platform: Platforms.browser,
            category: Genres['tower-defense'],
        };

        const { result } = renderHook(
            () => gameAPI.endpoints.fetchGames.useQuery(params),
            {
                wrapper: ({ children }) => (
                    <ReduxProvider>{children}</ReduxProvider>
                ),
            },
        );

        await act(async () => {
            await result.current.refetch();
        });

        expect(result.current.data).toEqual(noResult);
        expect(result.current.error).toBeUndefined();
    });

    test('fetchGameDetails endpoint returns data. Status: 200, response type: TGame', async () => {
        const Game540Details = {
            id: 540,
            title: 'Overwatch 2',
            thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
            status: 'Live',
            short_description:
                'A hero-focused first-person team shooter from Blizzard Entertainment.',
            description:
                'The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass – both free and premium. This is where some of the game’s characters will be obtained.',
            game_url: 'https://www.freetogame.com/open/overwatch-2',
            genre: 'Shooter',
            platform: 'Windows',
            publisher: 'Activision Blizzard',
            developer: 'Blizzard Entertainment',
            release_date: '2022-10-04',
            freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
            minimum_system_requirements: {
                os: 'Windows 10 64-bit',
                processor: 'Intel Core i3 or AMD Phenom X3 8650',
                memory: '6 GB',
                graphics:
                    'NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series',
                storage: '50 GB',
            },
            screenshots: [
                {
                    id: 1334,
                    image: 'https://www.freetogame.com/g/540/overwatch-2-1.jpg',
                },
                {
                    id: 1335,
                    image: 'https://www.freetogame.com/g/540/overwatch-2-2.jpg',
                },
                {
                    id: 1336,
                    image: 'https://www.freetogame.com/g/540/overwatch-2-3.jpg',
                },
            ],
        };
        const gameId = '540';

        const { result } = renderHook(
            () => gameAPI.endpoints.fetchGameDetails.useQuery({ id: gameId }),
            {
                wrapper: ({ children }) => (
                    <ReduxProvider>{children}</ReduxProvider>
                ),
            },
        );

        await act(async () => {
            await result.current.refetch();
        });

        expect(result.current.data).toEqual(Game540Details);
        expect(result.current.error).toBeUndefined();
    });

    test('fetchGameDetails endpoint handles errors. Status: 404, response type: TNoResults', async () => {
        const noResult = {
            data: {
                status: 0,
                status_message: 'No game found with that id',
            },
            status: 404,
        };

        const gameId = '42591';

        const { result } = renderHook(
            () => gameAPI.endpoints.fetchGameDetails.useQuery({ id: gameId }),
            {
                wrapper: ({ children }) => (
                    <ReduxProvider>{children}</ReduxProvider>
                ),
            },
        );

        await act(async () => {
            await result.current.refetch();
        });

        expect(result.current.data).toBeUndefined();
        expect(result.current.error).toEqual(noResult);
    }, 10000);
});
