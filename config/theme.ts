import { extendTheme } from '@chakra-ui/react';
import { Button } from './variants';

export const defaultThemeObject = {
  initialColorMode: 'dark',
  fonts: {
    body: 'League Spartan, Sono, system-ui, sans-serif',
    heading: 'Zen Dots, system-ui, sans-serif'
  },
  colors: {
    primary: {
      '50': '#e5e7f9',
      '100': '#bec4ef',
      '200': '#929ce4',
      '300': '#6674d9',
      '400': '#4657d1',
      '500': '#2539c9',
      '600': '#2133c3',
      '700': '#1b2cbc',
      '800': '#1624b5',
      '900': '#0d17a9'
    },
    yieldmos: {
      'green.400': '#64ff4e',
      'green.600': '#45b236'
    },
    keplr: {
      'white.400': '#EBF7FD',
      'cyan.400': '#1BB8FF',
      'blue.400': '#232DE3',
      'blue.900': '#141b42',
      'purple.400': '#8B4DFF',
      'blurple.400': '#5A00E8',
    },
  },
  breakPoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
  },
  components: {
    Button
  }
};

export const defaultTheme = extendTheme(defaultThemeObject);
