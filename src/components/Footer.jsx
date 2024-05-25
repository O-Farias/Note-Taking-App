import React from "react";
import { Box, Text, Link, VStack, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" mt={8} p={4} textAlign="center">
      <VStack spacing={2}>
        <Text fontSize="lg">Made by Mateus Farias</Text>
        <HStack spacing={4}>
          <Link
            href="https://www.linkedin.com/in/mateus-farias-b6ab77247/"
            isExternal
          >
            <FaLinkedin size="24" />
          </Link>
          <Link href="https://www.instagram.com/_fariasm/" isExternal>
            <FaInstagram size="24" />
          </Link>
          <Link href="https://github.com/O-Farias" isExternal>
            <FaGithub size="24" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
