import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScreenshotCarousel from '../components/ScreenshotCarousel/ScreenshotCarousel';

const mockScreenshots = [
    { id: 1, image: 'image1.jpg' },
    { id: 2, image: 'image2.jpg' },
    { id: 3, image: 'image3.jpg' },
];

describe('ScreenshotCarousel', () => {
    it('renders correctly', () => {
        render(<ScreenshotCarousel screenshots={mockScreenshots} />);

        const carousel = screen.getByTestId('screenshot-carousel');
        expect(carousel).toBeInTheDocument();
    });

    it('displays the correct number of screenshots', () => {
        render(<ScreenshotCarousel screenshots={mockScreenshots} />);

        const screenshots = screen.getAllByRole('img', {
            name: 'game screenshot',
        });
        expect(screenshots.length).toBe(mockScreenshots.length);
    });

    it('changes slides correctly', () => {
        render(<ScreenshotCarousel screenshots={mockScreenshots} />);

        const prevButton = screen.getByLabelText('Go to the previous slide');
        const nextButton = screen.getByLabelText('Go to the next slide');

        const activeSlide = screen.getAllByAltText('game screenshot')[0];
        expect(activeSlide).toHaveClass('slide__active');

        fireEvent.click(nextButton);
        const secondSlide = screen.getAllByAltText('game screenshot')[1];
        expect(secondSlide).toHaveClass('slide__active');

        fireEvent.click(prevButton);
        expect(activeSlide).toHaveClass('slide__active');
    });

    it('enters fullscreen mode when clicking on a screenshot', () => {
        render(<ScreenshotCarousel screenshots={mockScreenshots} />);

        const screenshot = screen.getAllByAltText('game screenshot')[0];
        fireEvent.click(screenshot);

        const container = screen.getByTestId('screenshot-carousel');
        expect(container).toHaveClass('slideshow_container__fullscreen');
    });

    it('exits fullscreen mode when clicking on the exit button', () => {
        render(<ScreenshotCarousel screenshots={mockScreenshots} />);

        const screenshot = screen.getAllByAltText('game screenshot')[0];
        fireEvent.click(screenshot);

        const exitButton = screen.getByLabelText('Escape fullscreen view');
        fireEvent.click(exitButton);

        const container = screen.getByTestId('screenshot-carousel');
        expect(container).not.toHaveClass('slideshow_container__fullscreen');
    });
});
