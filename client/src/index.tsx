import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './providers/App.provider';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './const/routes';

const routes = useRoutes();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>{routes}</AppProvider>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
