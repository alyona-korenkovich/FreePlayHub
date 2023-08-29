import '@testing-library/jest-dom';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { toHaveNoViolations } from 'jest-axe';

expect.extend({ toMatchImageSnapshot });
expect.extend(toHaveNoViolations);
