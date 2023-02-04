import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  variants: {
    // Yieldmoist
    yieldmos: {
      bgColor: 'green.900',
      color: 'yieldmos.green.600',
      borderColor: 'yieldmos.green.600',
      borderWidth: '1px',
      _hover: {
        bgColor: 'green.100',
        borderColor: 'yieldmos.green.600',
        color: 'black',
        borderWidth: '1px',
      }
    },
    // Keplr -_-
    keplr: {
      borderColor: 'keplr.blue.400',
      borderWidth: '1px',
      color: 'keplr.cyan.400',
      _hover: {
        bgColor: 'gray.900',
        borderColor: 'keplr.blue.400',
        borderWidth: '1px',
      }
    },
  },
})
