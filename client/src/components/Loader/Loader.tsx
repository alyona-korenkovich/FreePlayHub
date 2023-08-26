import React from 'react';
import styles from './Loader.module.scss';
import { Spinner } from '@chakra-ui/react';

const Loader = () => {
    return (
        <div className={styles.loader_container}>
            <Spinner />
            <span>Загрузка</span>
        </div>
    );
};

export default Loader;
