import { Sorts } from '../const/sorts';

export function isValidSort(str: string): str is Sorts {
    str = str.toLowerCase();
    return Object.keys(Sorts).some((sort) => {
        return Sorts[sort as keyof typeof Sorts] === str;
    });
}
