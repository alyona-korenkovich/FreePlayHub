import { Platforms } from '../const/platforms';
import { Genres } from '../const/genres';
import { Sorts } from '../const/sorts';

export type TFetchGamesParams = {
    platform?: Platforms;
    category?: Genres;
    'sort-by'?: Sorts;
};
