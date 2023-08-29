import { Genres } from '../const/genres';

export function isValidGenre(str: string): str is Genres {
    str = str.toLowerCase();
    return Object.keys(Genres).some((genre) => {
        return Genres[genre as keyof typeof Genres] === str;
    });
}
