import React from "react";
import {
  ChakraProvider,
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  FiDatabase,
  FiBarChart,
  FiEdit,
  FiLayers,
  FiClock,
  FiPhone,
} from "react-icons/fi";
import Features from "./components/Features"; // Import the Feature component
import logo from "./assets/SamyCharts.png"; // Import the logo
import theme from "./theme"; // Import your theme
import Footer from "./components/Footer"; // Import Footer component

const features = [
  {
    icon: FiDatabase,
    title: "Comprehensive Historical Data",
    description:
      "Access extensive historical data for NSE/BSE stocks via Fyers API, enabling reliable backtesting and strategy refinement.",
  },
  {
    icon: FiBarChart,
    title: "Diverse Chart Types",
    description:
      "Choose from Bars, Candles, Hollow Candles, Line, Area, and more—fully supported by the Advanced Charts library.",
  },
  {
    icon: FiEdit,
    title: "Professional Drawing Tools",
    description:
      "Draw trend lines, Fibonacci retracements, and custom annotations directly on the chart to visualize key levels.",
  },
  {
    icon: FiLayers,
    title: "Technical Indicators Library",
    description:
      "Apply 100+ built-in technical indicators such as RSI, MACD, and Bollinger Bands—no coding or Pine Script required.",
  },
  {
    icon: FiBarChart,
    title: "Multi-Symbol Comparison",
    description:
      "Overlay multiple symbols on a single chart session to compare performance side-by-side with synchronized time scales.",
  },
  {
    icon: FiClock,
    title: "Custom Time Resolutions",
    description:
      "Build higher-resolution bars from lower-resolution data (e.g., 2-minute from 1-minute) and use second-based intervals.",
  },
  {
    icon: FiPhone,
    title: "Mobile-Friendly Design",
    description:
      "Enjoy a responsive, touch-optimized charting experience on mobile devices, with adaptive layouts for various screen sizes.",
  },
];

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.900" color="white" minHeight="100vh">
        <Container maxW="container.lg" pt={10} centerContent>
          <Image
            src={logo}
            alt="SamyCharts Logo"
            height="50px"
            objectFit="contain"
            mb={6} // Chakra UI margin prop
          />

          <Heading
            as="h1"
            size="2xl"
            color="brand.400"
            mb={6}
            textAlign="center"
          >
            Ultra-Fast Indian Market Charts
          </Heading>

          <Text fontSize="lg" mb={10} textAlign="center" color="gray.400">
            Public, non-commercial charting platform for NSE/BSE stocks—powered
            by Fyers API & TradingView Advanced Charts.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <Features
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </SimpleGrid>

          <Box textAlign="center" mt={10}>
            <Button colorScheme="orange" bg="brand.400" size="lg">
              Get Started
            </Button>
          </Box>
        </Container>

        {/* Footer Component */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
