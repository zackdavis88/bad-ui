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
    success: {
      main: '#18670E',
    },
    error: {
      main: '#A12121',
      light: '#E99696',
    },
    info: {
      main: '#025C8D',
    },
    warning: {
      main: '#8D4002',
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
              props: { variant: 'outlined' },
              style: {
                '&.MuiTextField-root': {
                  '& label': {
                    color: '#FFFFFF',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFFFFF',
                  },
                  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFFFFF',
                  },
                },
              },
            },
            {
              props: { variant: 'filled' },
              style: {
                '&.MuiTextField-root': {
                  '& > .MuiInputLabel-root:not(.Mui-disabled, .Mui-error)': {
                    color: '#FFFFFF',
                  },
                  '& > .MuiInputLabel-root.Mui-focused:not(.Mui-disabled, .Mui-error)': {
                    color: '#FFFFFF',
                  },
                  '& > .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before': {
                    borderBottom: '1px solid #FFFFFF',
                  },
                  '& > .MuiInputBase-root:not(.Mui-disabled, .Mui-error)::before': {
                    borderBottom: '1px solid #FFFFFF',
                  },
                  '& > .MuiInputBase-root.Mui-error::before': {
                    borderBottom: '1px solid #E99696',
                  },
                  '& > .MuiInputBase-root.Mui-error.Mui-focused::before': {
                    borderBottom: '1px solid #E99696',
                  },
                  '& > .MuiInputBase-root.Mui-error::after': {
                    borderBottom: '1px solid #E99696',
                  },
                  '& .MuiInputLabel-asterisk.Mui-error': {
                    color: '#E99696',
                  },
                  '& > .Mui-error': {
                    color: '#E99696',
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
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                '&.MuiButton-root': {
                  '&.MuiButton-colorPrimary.Mui-disabled': {
                    backgroundColor: '#2B387B',
                    color: '#D7D7D7',
                  },
                },
              },
            },
            {
              props: { variant: 'contained', color: 'error', disabled: true },
              style: {
                '&.MuiButton-root': {
                  '&.Mui-disabled': {
                    backgroundColor: '#771818',
                    color: '#D7D7D7',
                  },
                },
              },
            },
            {
              props: { variant: 'contained', color: 'info', disabled: true },
              style: {
                '&.MuiButton-root': {
                  '&.Mui-disabled': {
                    backgroundColor: '#024369',
                    color: '#D7D7D7',
                  },
                },
              },
            },
          ],
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          '&.MuiBreadcrumbs-root': {
            color: '#B7B7B7',
          },
        },
      },
    },
  },
});

export default theme;
