import React from 'react';
import { ReduxProvider } from './Redux.provider';
import { ChakraUIProvider } from './ChakraUI.provider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReduxProvider>
            <ChakraUIProvider>{children}</ChakraUIProvider>
        </ReduxProvider>
    );
};
