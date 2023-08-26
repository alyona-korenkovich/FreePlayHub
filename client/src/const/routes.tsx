import Header from '../components/Header/Header';
import GameList from '../components/GameList/GameList';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GamePage from '../components/GamePage/GamePage';

export const useRoutes = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route                    path='/'
                    element={<GameList />}
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
