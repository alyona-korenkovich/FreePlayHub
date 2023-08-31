export const API_URL =
    'http://localhost:' +
    (process.env.REACT_APP_PORT_SERVER || 5000) +
    '/games';
export const CACHE_INVALIDATION_TIME_IN_MS = 5 * 60 * 1000;
export const GAMES_PER_PAGE = 10;
