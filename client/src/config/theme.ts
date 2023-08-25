import { extendTheme } from '@chakra-ui/react';

const colors = {
    primary: '#000000',
    primaryAccent: '#C7C3F4',
    secondary: '#454C55',
    grey: '#606060',
    lightGrey: '#F2F2F2',
};

const styles = {
    global: {
        'html, body': {
            maxWidth: '100vw',
            overflowX: 'hidden',
            fontFamily: 'Poppins',
        },
        '*': {
            boxSizing: 'border-box',
            padding: '0',
            margin: '0',
        },
    },
};

export const theme = extendTheme({ colors, styles });
