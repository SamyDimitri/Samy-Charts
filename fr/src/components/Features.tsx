// src/components/Feature.tsx
import React from "react";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Box
    bg="gray.800"
    borderRadius="lg"
    boxShadow="xl"
    p={6}
    display="flex"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    _hover={{ bg: "gray.700", transform: "scale(1.05)" }}
  >
    <Icon as={icon} color="brand.400" w={16} h={16} mb={4} />
    <Heading size="md" color="brand.400" mb={2}>
      {title}
    </Heading>
    <Text color="gray.300">{description}</Text>
  </Box>
);

export default Feature;
