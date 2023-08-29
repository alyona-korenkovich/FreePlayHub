import React from 'react';
import styles from './GameCard.module.scss';
import { Badge, Text } from '@chakra-ui/react';
import { TGame } from '../../types/TGame';
import { useNavigate } from 'react-router-dom';
import { reformatDate } from '../../utils/reformatDate';

const GameCard = ({
    id,
    title,
    thumbnail,
    publisher,
    genre,
    release_date,
}: TGame) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/game/${id}`);
    };
    const reformattedDate = reformatDate(release_date);

    return (
        <div
            className={styles.card_container}
            data-testid='card-container'
            onClick={handleClick}
        >
            <img
                className={styles.card_thumbnail}
                src={thumbnail}
                alt='Game thumbnail'
            />
            <div className={styles.card_details}>
                <div className={styles.card_header}>
                    <Text
                        fontFamily='Poppins, sans-serif'
                        fontSize='16px'
                        fontWeight='600'
                    >
                        {title}
                    </Text>
                    <div className={styles.card_release_date}>
                        <Text
                            colorScheme='grey'
                            fontFamily='Poppins, sans-serif'
                            fontSize='14px'
                            fontWeight='400'
                        >
                            дата&nbsp;выхода:
                        </Text>
                        <Text
                            colorScheme='grey'
                            fontFamily='Poppins, sans-serif'
                            fontSize='14px'
                            fontWeight='400'
                        >
                            {reformattedDate}
                        </Text>
                    </div>
                </div>
                <Badge colorScheme='purple'>{genre}</Badge>
                <Text
                    fontFamily='Poppins, sans-serif'
                    fontSize='14px'
                    fontWeight='400'
                >
                    {publisher}
                </Text>
            </div>
        </div>
    );
};

export default GameCard;
