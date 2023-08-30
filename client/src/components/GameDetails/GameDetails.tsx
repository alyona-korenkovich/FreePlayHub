import React from 'react';
import styles from './GameDetails.module.scss';
import Loader from '../Loader/Loader';
import {
    Button,
    Heading,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Tr,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import { useNavigate } from 'react-router-dom';
import { TGameDetails } from '../../types/TGameDetails';
import { reformatDate } from '../../utils/reformatDate';

const GameDetails = ({ isLoading, error, details }: TGameDetails) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <div>
            <main className={styles.game_container}>
                {isLoading && <Loader />}
                {error && (
                    <>
                        <Button
                            width='100%'
                            leftIcon={<ArrowBackIcon />}
                            onClick={handleClick}
                        >
                            Назад к списку игр
                        </Button>
                        <Text color='red'>Произошла ошибка при загрузке</Text>
                    </>
                )}
                {details && (
                    <>
                        <aside className={styles.side_panel}>
                            <Heading
                                as='h1'
                                fontFamily='Poppins, sans-serif'
                                fontSize='32px'
                                fontWeight='600'
                            >
                                {details!.title}
                            </Heading>
                            <img
                                src={details!.thumbnail}
                                alt='game thumbnail'
                            ></img>
                            <Button
                                width='100%'
                                leftIcon={<ArrowBackIcon />}
                                onClick={handleClick}
                            >
                                Назад к списку игр
                            </Button>
                        </aside>
                        <section className={styles.game_details}>
                            <section>
                                <Heading
                                    as='h2'
                                    fontFamily='Poppins, sans-serif'
                                    fontSize='24px'
                                    fontWeight='600'
                                >
                                    Об игре
                                </Heading>
                                <Table>
                                    <Tbody maxWidth='50vw'>
                                        <Tr>
                                            <Th width='40%'>Дата выхода</Th>
                                            <Td>
                                                {reformatDate(
                                                    details!.release_date,
                                                )}
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Th width='40%'>Жанр</Th>
                                            <Td>{details!.genre}</Td>
                                        </Tr>
                                        <Tr>
                                            <Th width='40%'>Разработчик</Th>
                                            <Td data-testid='developer'>
                                                {details!.developer}
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Th width='40%'>Издатель</Th>
                                            <Td data-testid='publisher'>
                                                {details!.publisher}
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </section>
                            {details!.minimum_system_requirements && (
                                <section>
                                    <Heading
                                        as='h2'
                                        fontFamily='Poppins, sans-serif'
                                        fontSize='24px'
                                        fontWeight='600'
                                    >
                                        Системные требования
                                    </Heading>
                                    <Table>
                                        <Tbody maxWidth='50vw'>
                                            <Tr>
                                                <Th width='40%'>
                                                    Операционная система
                                                </Th>
                                                <Td>
                                                    {
                                                        details!
                                                            .minimum_system_requirements!
                                                            .os
                                                    }
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th width='40%'>Процессор</Th>
                                                <Td>
                                                    {
                                                        details!
                                                            .minimum_system_requirements!
                                                            .processor
                                                    }
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th width='40%'>Память</Th>
                                                <Td>
                                                    {
                                                        details!
                                                            .minimum_system_requirements!
                                                            .memory
                                                    }
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th width='40%'>Видеокарта</Th>
                                                <Td>
                                                    {
                                                        details!
                                                            .minimum_system_requirements!
                                                            .graphics
                                                    }
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th width='40%'>
                                                    Место на диске
                                                </Th>
                                                <Td>
                                                    {
                                                        details!
                                                            .minimum_system_requirements!
                                                            .storage
                                                    }
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </section>
                            )}
                            <section>
                                <Heading
                                    as='h2'
                                    fontFamily='Poppins, sans-serif'
                                    fontSize='24px'
                                    fontWeight='600'
                                >
                                    Галерея скриншотов
                                </Heading>
                                <ScreenshotCarousel
                                    screenshots={details.screenshots!}
                                />
                            </section>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
};

export default GameDetails;
