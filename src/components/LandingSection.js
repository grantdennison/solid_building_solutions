import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "./LandingSection.css";

const greeting = "";

const bio1 = ``;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#02301f"
  >
    <VStack spacing={6} align="center">
      <HStack spacing={10} align="center">
        <Avatar alt="Avatar" className="landing_avator" size="xl" />
        <Heading as="h1" size="xl" color="white" className="landing_heading">
          {greeting}
        </Heading>
      </HStack>
      <Heading as="h2" color="white" className="landing_para">
        {bio1}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
