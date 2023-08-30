import React, { useState } from 'react';
import styles from './ScreenshotCarousel.module.scss';
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { TGameScreenshot } from '../../types/TGameScreenshot';

type TScreenshotCarousel = {
    screenshots: Array<TGameScreenshot>;
};

const ScreenshotCarousel = ({ screenshots }: TScreenshotCarousel) => {
    const [currSlide, setCurrSlide] = useState<number>(0);
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    const changeSlide = (idx: number) => {
        if (idx === screenshots.length) idx = 0;
        else if (idx < 0) idx = screenshots.length - 1;

        setCurrSlide(idx);
    };

    return (
        <div
            className={
                styles.slideshow_container +
                ' ' +
                (fullScreen ? styles.slideshow_container__fullscreen : '')
            }
            data-testid='screenshot-carousel'
        >
            <button
                className={
                    styles.escFullScreen +
                    ' ' +
                    (fullScreen ? styles.escFullScreen__active : '')
                }
                onClick={() => setFullScreen(false)}
                aria-label='Escape fullscreen view'
            >
                <CloseIcon />
            </button>
            <div className={styles.slideshow}>
                {screenshots.map((img, idx) => (
                    <img
                        key={img.id}
                        className={
                            styles.slide +
                            ' ' +
                            (idx === currSlide ? styles.slide__active : '')
                        }
                        src={img.image}
                        alt={'game screenshot'}
                        onClick={() => setFullScreen(true)}
                    />
                ))}
                <button
                    className={styles.prevSlide}
                    onClick={() => {
                        changeSlide(currSlide - 1);
                    }}
                    aria-label='Go to the previous slide'
                >
                    <ArrowBackIcon />
                </button>
                <button
                    className={styles.nextSlide}
                    onClick={() => {
                        changeSlide(currSlide + 1);
                    }}
                    aria-label='Go to the next slide'
                >
                    <ArrowForwardIcon />
                </button>
            </div>
            <div className={styles.slideshow_dots}>
                {screenshots.map((v, i) => (
                    <span
                        key={i}
                        className={
                            styles.dot +
                            ' ' +
                            (currSlide === i ? styles.dot__active : '')
                        }
                        onClick={() => {
                            changeSlide(i);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScreenshotCarousel;
