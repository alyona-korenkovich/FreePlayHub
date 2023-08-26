import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../config/theme';

export const ChakraUIProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ChakraProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ChakraProvider>
    );
};
