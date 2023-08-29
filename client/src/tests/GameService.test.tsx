import { act, renderHook } from '@testing-library/react';
import { gameAPI } from '../services/GameService';
import { ReduxProvider } from '../providers/Redux.provider';
import { Platforms } from '../const/platforms';
import { Genres } from '../const/genres';

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
        const Game421Details = {
            id: 421,
            title: 'Therian Saga',
            thumbnail: 'https://www.freetogame.com/g/421/thumbnail.jpg',
            status: 'Live',
            short_description:
                'A browser-based sandbox MMORPG with a complex crafting system.',
            description:
                'Therian Saga is a free to play browser-based sandbox MMORPG with strategy elements where players create a unique character to explore, hunt, train, and craft.\r\n\r\nTherian Saga is not your typical role-playing game, this browser MMORPG, published by Gameforge AG, offers turn-based combat, a complex crafting system, a task-based queue system and Dungeons and Dragons-inspired dungeon crawling. Though the game has a low player based and can sometimes be slow-paced, one of the game’s redeeming qualities is its detailed customization. Players can choose from a myriad of skills and various aesthetic choices to contrive their own unique character to progress through the game with.\r\n\r\nAdditionally, players can queue up certain tasks for their avatar, which they will complete over time to meet the requirements of various game objectives.',
            game_url: 'https://www.freetogame.com/open/therian-saga',
            genre: 'MMORPG',
            platform: 'Windows, Web Browser',
            publisher: 'Gameforge',
            developer: 'Virtys',
            release_date: '2017-03-27',
            freetogame_profile_url: 'https://www.freetogame.com/therian-saga',
            minimum_system_requirements: {
                os: null,
                processor: null,
                memory: null,
                graphics: null,
                storage: null,
            },
            screenshots: [
                {
                    id: 1033,
                    image: 'https://www.freetogame.com/g/421/Therian-Saga-1.jpg',
                },
                {
                    id: 1034,
                    image: 'https://www.freetogame.com/g/421/Therian-Saga-2.jpg',
                },
                {
                    id: 1035,
                    image: 'https://www.freetogame.com/g/421/Therian-Saga-3.jpg',
                },
            ],
        };
        const gameId = '421';

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

        expect(result.current.data).toEqual(Game421Details);
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
