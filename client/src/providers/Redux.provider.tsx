import React from 'react';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';

const store = setupStore();

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};
