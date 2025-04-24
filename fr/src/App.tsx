import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

const App: React.FC = () => (
  <Box bg="gray.900" color="white" minH="100vh">
    <Container maxW="container.lg" py={10}>
      <Hero />
      <Features />
    </Container>
    <Footer />
  </Box>
)

export default App