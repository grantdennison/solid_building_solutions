import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      border={"5px solid black"}
      overflow="hidden"
      backgroundColor="rgba(0, 0, 0, 0.448)"
      padding-bottom={"200px"}
    >
      <Image src={imageSrc} alt={title} w={"100%"} h={"55%"} />
      <VStack p={4} spacing={2}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack justify="flex-end">
          <Link href={url} isExternal>
            Explore More
          </Link>
          <Link href={url} isExternal>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
