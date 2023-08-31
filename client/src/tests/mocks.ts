import { rest } from 'msw';
import { API_URL } from '../config/const';

// 200
export const allGames = [
    {
        id: 540,
        title: 'Overwatch 2',
        thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
        short_description:
            'A hero-focused first-person team shooter from Blizzard Entertainment.',
        game_url: 'https://www.freetogame.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
    },
    {
        id: 521,
        title: 'Diablo Immortal',
        thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
        short_description:
            'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
        game_url: 'https://www.freetogame.com/open/diablo-immortal',
        genre: 'MMOARPG',
        platform: 'PC (Windows)',
        publisher: 'Blizzard Entertainment',
        developer: 'Blizzard Entertainment',
        release_date: '2022-06-02',
        freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
    },
    {
        id: 517,
        title: 'Lost Ark',
        thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
        short_description:
            'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
        game_url: 'https://www.freetogame.com/open/lost-ark',
        genre: 'ARPG',
        platform: 'PC (Windows)',
        publisher: 'Amazon Games',
        developer: 'Smilegate RPG',
        release_date: '2022-02-11',
        freetogame_profile_url: 'https://www.freetogame.com/lost-ark',
    },
    {
        id: 516,
        title: 'PUBG: BATTLEGROUNDS',
        thumbnail: 'https://www.freetogame.com/g/516/thumbnail.jpg',
        short_description:
            'Get into the action in one of the longest running battle royale games PUBG Battlegrounds.',
        game_url: 'https://www.freetogame.com/open/pubg',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'KRAFTON, Inc.',
        developer: 'KRAFTON, Inc.',
        release_date: '2022-01-12',
        freetogame_profile_url: 'https://www.freetogame.com/pubg',
    },
    {
        id: 508,
        title: 'Enlisted',
        thumbnail: 'https://www.freetogame.com/g/508/thumbnail.jpg',
        short_description:
            'Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ',
        game_url: 'https://www.freetogame.com/open/enlisted',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Gaijin Entertainment',
        developer: 'Darkflow Software',
        release_date: '2021-04-08',
        freetogame_profile_url: 'https://www.freetogame.com/enlisted',
    },
];
const browserGames = [
    {
        id: 345,
        title: 'Forge of Empires',
        thumbnail: 'https://www.freetogame.com/g/345/thumbnail.jpg',
        short_description:
            'A free to play 2D browser-based online strategy game, become the leader and raise your city.',
        game_url: 'https://www.freetogame.com/open/forge-of-empires',
        genre: 'Strategy',
        platform: 'Web Browser',
        publisher: 'InnoGames',
        developer: 'InnoGames',
        release_date: '2012-04-17',
        freetogame_profile_url: 'https://www.freetogame.com/forge-of-empires',
    },
    {
        id: 427,
        title: 'Drakensang Online',
        thumbnail: 'https://www.freetogame.com/g/427/thumbnail.jpg',
        short_description:
            'A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.',
        game_url: 'https://www.freetogame.com/open/drakensang-online',
        genre: 'MMORPG',
        platform: 'Web Browser',
        publisher: 'Bigpoint',
        developer: 'Bigpoint',
        release_date: '2011-08-08',
        freetogame_profile_url: 'https://www.freetogame.com/drakensang-online',
    },
    {
        id: 340,
        title: 'Game Of Thrones Winter Is Coming',
        thumbnail: 'https://www.freetogame.com/g/340/thumbnail.jpg',
        short_description:
            'A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.',
        game_url:
            'https://www.freetogame.com/open/game-of-thrones-winter-is-coming',
        genre: 'Strategy',
        platform: 'Web Browser',
        publisher: 'GTArcade',
        developer: 'YOOZOO Games ',
        release_date: '2019-11-14',
        freetogame_profile_url:
            'https://www.freetogame.com/game-of-thrones-winter-is-coming',
    },
];
export const browserMmotpsGames = [
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
        freetogame_profile_url: 'https://www.freetogame.com/pocket-starships',
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
        freetogame_profile_url: 'https://www.freetogame.com/realm-mad-god',
    },
];
// 404
const noGamesFound = {
    status: 0,
    status_message:
        'No results available at the moment, please try again later.',
};

// 200
const game540 = {
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
        graphics: 'NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series',
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
// 404
const noGameFound = {
    status: 0,
    status_message: 'No game found with that id',
};

export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
        const platform = req.url.searchParams.get('platform');
        const category = req.url.searchParams.get('category');
        const sortedBy = req.url.searchParams.get('sorted-by');

        if (!platform && !category && !sortedBy)
            return res(ctx.status(200), ctx.json(allGames));

        if (platform === 'browser')
            if (category === 'mmotps')
                return res(ctx.status(200), ctx.json(browserMmotpsGames));
            else if (category === 'tower-defense')
                return res(ctx.status(404), ctx.json(noGamesFound));
            else return res(ctx.status(200), ctx.json(browserGames));
    }),
    rest.get(API_URL + '/game', (req, res, ctx) => {
        const id = req.url.searchParams.get('id');
        if (id === '540') return res(ctx.status(200), ctx.json(game540));

        return res(ctx.status(404), ctx.json(noGameFound));
    }),
];
