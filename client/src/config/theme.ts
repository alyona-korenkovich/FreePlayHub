import { extendTheme } from '@chakra-ui/react';

const colors = {
    primary: '#000000',
    primaryAccent: '#C1ACE3',
    secondary: '#454C55',
    grey: '#606060',
    lightGrey: '#F2F2F2',
};

const styles = {
    global: {
        'html, body': {
            maxWidth: '100vw',
            overflowX: 'hidden',
            fontFamily: 'sans-serif',
        },
        '*': {
            boxSizing: 'border-box',
            padding: '0',
            margin: '0',
        },
    },
};

export const theme = extendTheme({ colors, styles });
