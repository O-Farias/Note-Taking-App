import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const Header = () => {
  console.log("Header component rendering");
  return (
    <>
      <Heading as="h1" size="2xl" mb={2}>
        Note-taking App
      </Heading>
      <Text fontSize="lg" color="gray.600">
        An elegant and modern note-taking application
      </Text>
    </>
  );
};

export default Header;
