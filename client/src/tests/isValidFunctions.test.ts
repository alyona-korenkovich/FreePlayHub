import { isValidGenre } from '../utils/isValidGenre';
import { isValidPlatform } from '../utils/isValidPlatform';
import { isValidSort } from '../utils/isValidSort';

describe('Tests for isValid... type of functions', () => {
    test('isValidGenre returns true for a valid genre', () => {
        const result = isValidGenre('racing');
        expect(result).toBe(true);
    });

    test('isValidGenre returns false for an invalid genre', () => {
        const result = isValidGenre('simulator');
        expect(result).toBe(false);
    });

    test('isValidPlatform returns true for a valid platform', () => {
        const result = isValidPlatform('pc');
        expect(result).toBe(true);
    });

    test('isValidPlatform returns false for an invalid platform', () => {
        const result = isValidPlatform('tablet');
        expect(result).toBe(false);
    });

    test('isValidSort returns true for a valid sort option', () => {
        const result = isValidSort('popularity');
        expect(result).toBe(true);
    });

    test('isValidSort returns false for an invalid sort option', () => {
        const result = isValidSort('recommendation');
        expect(result).toBe(false);
    });

    test('isValid... functions are not case sensitive', () => {
        const genreRes = isValidGenre('Sci-Fi');
        const platformRes = isValidPlatform('PC');
        const sortRes = isValidSort('Relevance');

        expect(genreRes).toBe(true);
        expect(platformRes).toBe(true);
        expect(sortRes).toBe(true);
    });
});
