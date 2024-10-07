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
      main: '#3E50B1',
    },
    text: {
      primary: '#FFFFFF',
    },
    error: {
      main: '#A12121',
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
                    color: '#FFFFFF',
                  },
                  '& > .MuiInputLabel-root.Mui-focused': {
                    color: '#FFFFFF',
                  },
                  '& > .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before': {
                    borderBottom: '1px solid #FFFFFF',
                  },
                  '& > .MuiInputBase-root:not(.Mui-disabled, .Mui-error)::before': {
                    borderBottom: '1px solid #FFFFFF',
                  },
                  '& > .MuiInputBase-root.Mui-focused': {
                    backgroundColor: '#212121',
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
