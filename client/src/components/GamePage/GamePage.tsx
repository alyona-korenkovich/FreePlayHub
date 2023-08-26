import React from 'react';
import styles from './GamePage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Button,
    Heading,
    Table,
    Tr,
    Th,
    Td,
    Tbody,
    Text,
} from '@chakra-ui/react';
import { gameAPI } from '../../services/GameService';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import Loader from '../Loader/Loader';

const GamePage = () => {
    const navigate = useNavigate();
    const gameID = useParams().id;
    const {
        data: details,
        error,
        isLoading,
    } = gameAPI.useFetchGameDetailsQuery({ id: gameID! });

    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <main className={styles.game_container}>
            {isLoading && <Loader />}
            {error && <Text color='red'>Произошла ошибка при загрузке</Text>}
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
                                        <Td>{details!.release_date}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th width='40%'>Жанр</Th>
                                        <Td>{details!.genre}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th width='40%'>Разработчик</Th>
                                        <Td>{details!.developer}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th width='40%'>Издатель</Th>
                                        <Td>{details!.publisher}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </section>
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
                                        <Th width='40%'>Место на диске</Th>
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
    );
};

export default GamePage;
