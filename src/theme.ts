'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    text: {
      primary: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'filled' },
              style: {
                '&.MuiTextField-root': {
                  '& > .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& > .MuiInputLabel-root.Mui-focused': {
                    color: '#fff',
                  },
                  '& > .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before': {
                    borderBottom: '1px solid #fff',
                  },
                  '& > .MuiInputBase-root:not(.Mui-disabled, .Mui-error)::before': {
                    borderBottom: '1px solid #fff',
                  },
                  '& > .MuiInputBase-root.Mui-focused': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
