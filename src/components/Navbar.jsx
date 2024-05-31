import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" p={2} _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
            About
          </Link>
          <Link as={NavLink} to="/events" p={2} _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
            Events
          </Link>
          <Link as={NavLink} to="/contact" p={2} _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;