import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Heading,
  color,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Footer from "./footer";
import WalletData from "./wallet-data";

const MainLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" direction="column" bg='#061C36'>
      <Box
        mx="auto"
        width="100%"
      >
        <Flex
          bg='#121212'
          color='#fff'
          minH={"100px"}
          py={{ base: 2 }}
          px={{ base: 16 }}
          borderBottom={2}
          borderStyle={"solid"}
          borderColor='#1c82f6'
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            bg="#121212"
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems="center">
              <Image src="./images/logo.svg" maxHeight="60px" />
              <Heading size="lg" color="#0FF3F5" mt={0.2} ml={1}>
                PlatziFire
              </Heading>
            </Flex>
            {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              pl={16}
              fontSize="2xl"
              >
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to} _hover={{
                  background: "#121212",
                  color: "#1c82f6",
                }}>
                  {name}
                </NavLink>
              ))}
            </HStack> */}
          </HStack>
          <WalletData />
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} color="#fff" display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, to }) => (
                <NavLink  key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
