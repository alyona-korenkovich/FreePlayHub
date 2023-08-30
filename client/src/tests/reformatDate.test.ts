import { reformatDate } from '../utils/reformatDate';

describe('reformatDate unit tests', () => {
    test('Date reformats correctly', () => {
        expect(reformatDate('2019-06-13')).toBe('13.06.2019');
    });

    test('reformatDate handles empty string', () => {
        expect(reformatDate('')).toBe('');
    });

    test('reformatDate leaves date unformatted if it has invalid format', () => {
        expect(reformatDate('17.09.2018')).toBe('17.09.2018');
        expect(reformatDate('17-09-2018')).toBe('17-09-2018');
        expect(reformatDate('17/09/18')).toBe('17/09/18');
    });

    test('reformatDate leaves date unformatted if it is invalid', () => {
        expect(reformatDate('2018-09-32')).toBe('2018-09-32');
        expect(reformatDate('2018-13-09')).toBe('2018-13-09');
        expect(reformatDate('2024-09-26')).toBe('2024-09-26');
    });
});
