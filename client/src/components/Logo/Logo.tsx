import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/logo.png';
import { Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <div
            className={styles.logo_container}
            onClick={handleClick}
        >
            <img
                className={styles.logo_image}
                src={logo}
                alt='GameController'
            ></img>
            <Text
                fontFamily='Poppins, sans-serif'
                fontSize='16px'
                fontWeight='600'
            >
                FreePlayHub
            </Text>
        </div>
    );
};

export default Logo;
