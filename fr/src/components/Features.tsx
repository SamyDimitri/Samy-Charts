import React from 'react'
import { SimpleGrid, Box, Icon, Heading, Text } from '@chakra-ui/react'
import { FiDatabase, FiZap, FiUsers } from 'react-icons/fi'

const features = [
  {
    icon: FiDatabase,
    title: 'Native Fyers API',
    desc: 'Real-time & historical data from Fyers for NSE/BSE stocks.'
  },
  {
    icon: FiZap,
    title: 'Instant Lazy Loading',
    desc: 'Fetch only visible data chunks; super-fast rendering.'
  },
  {
    icon: FiUsers,
    title: 'Community Scripts',
    desc: 'Share and use custom indicators built by our community.'
  }
]

const Features: React.FC = () => (
  <SimpleGrid columns={[1, 3]} spacing={10} py={10}>
    {features.map(f => (
      <Box textAlign="center" key={f.title}>
        <Icon as={f.icon} w={12} h={12} mb={4} color="teal.300" />
        <Heading size="md" mb={2}>{f.title}</Heading>
        <Text>{f.desc}</Text>
      </Box>
    ))}
  </SimpleGrid>
)

export default Features