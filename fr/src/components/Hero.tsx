import React from 'react'
import { Heading, Text, Stack, Button } from '@chakra-ui/react'

const Hero: React.FC = () => (
  <Stack spacing={6} textAlign="center" py={20}>
    <Heading size="2xl">Ultra-Fast Indian Market Charts</Heading>
    <Text fontSize="xl">
      Public, non-commercial charting platform for NSE/BSE stocks—powered by Fyers API & TradingView Advanced Charts.
    </Text>
    <Button colorScheme="teal" size="lg" as="a" href="https://samychartapp.vercel.app" target="_blank">
      View Demo
    </Button>
  </Stack>
)

export default Hero