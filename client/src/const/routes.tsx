import Header from '../components/Header/Header';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GamePage from '../views/GamePage/GamePage';
import MainPage from '../views/MainPage/MainPage';

export const useRoutes = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route
                    path='/'
                    element={<MainPage />}
                />
                <Route
                    path='/game/:id'
                    element={<GamePage />}
                />
                <Route
                    path='/*'
                    element={
                        <Navigate
                            replace
                            to='/'
                        />
                    }
                />
            </Routes>
        </div>
    );
};
