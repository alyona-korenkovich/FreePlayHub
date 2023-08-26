import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header_container}>
            <Logo />
        </header>
    );
};

export default Header;
