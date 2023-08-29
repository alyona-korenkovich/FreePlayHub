import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import GameCard from '../components/GameCard/GameCard';
import { MemoryRouter } from 'react-router-dom';

test('GameCard component has no accessibility violations', async () => {
    const mockGame = {
        id: 1,
        title: 'Test Game',
        thumbnail: '../public/logo64.png',
        publisher: 'Test Publisher',
        genre: 'Test Genre',
        release_date: '2023-08-29',
    };

    const { container } = render(
        <MemoryRouter>
            <GameCard {...mockGame} />
        </MemoryRouter>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
