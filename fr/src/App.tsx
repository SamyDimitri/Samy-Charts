import React from "react";
import { Box, Text, VStack, Container } from "@chakra-ui/react";
import Features from "./components/Features";

const App: React.FC = () => {
  return (
    <Box>
      {/* Header can be added later */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="start">
          <Text fontSize="4xl" fontWeight="bold">
            Ultra-Fast Indian Market Charts
          </Text>
          <Text fontSize="xl" color="gray.600">
            Public, non-commercial charting platform for NSE/BSE stocks — powered by Fyers API & TradingView Advanced Charts.
          </Text>

          {/* Features Component */}
          <Features />

          {/* Footer */}
          <Box mt={10} textAlign="center">
            <Text fontSize="sm" color="gray.500">
              © 2025 Samy Charts. Built with Chakra UI & TradingView Advanced Charts.
              <br />
              Hosted on Vercel
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default App;
