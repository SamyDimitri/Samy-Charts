import React from "react";
import { SimpleGrid, Box, Icon, Heading, Text } from "@chakra-ui/react";
import { FiDatabase, FiZap, FiUsers } from "react-icons/fi";

const features = [
  {
    icon: FiDatabase, // Pass the icon component itself
    title: "Native Fyers API",
    description: "Real-time & historical market data from Fyers, exclusively for NSE/BSE stocks. Seamlessly integrated for superior performance.",
  },
  {
    icon: FiZap, // Pass the icon component itself
    title: "Instant Lazy Loading",
    description: "Fetch only visible data chunks to ensure lightning-fast chart rendering — no more waiting for slow data loads.",
  },
  {
    icon: FiUsers, // Pass the icon component itself
    title: "Customizable Community Scripts",
    description: "Share, use, and customize indicators built by our active trading community for more flexibility and options.",
  },
];

const Features: React.FC = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {features.map((feature, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" p={6} textAlign="center">
          <Icon as={feature.icon} color="teal.500" mb={4} />
          <Heading size="md" mb={2}>
            {feature.title}
          </Heading>
          <Text color="gray.600">{feature.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Features;
