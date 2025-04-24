import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box as="footer" bg="gray.800" py={6}>
    <Text textAlign="center" fontSize="sm">
      © {new Date().getFullYear()} Samy Charts. Built with Chakra UI & TradingView Advanced Charts. {' '}
      Hosted on {' '}
      <Link href="https://vercel.com" isExternal color="teal.200">
        Vercel
      </Link>
      <br />
      Contact us at: {' '}
      <Link href="mailto:adotshyam@gmail.com" color="teal.200">
        adotshyam@gmail.com
      </Link>
    </Text>
  </Box>
);

export default Footer;
