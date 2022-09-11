import {
  Box,
  Flex,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import WalletData from "./wallet-data";

const MainLayout = ({ children }) => {

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
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems="center">
              <Image src="./images/logo.svg" maxHeight="60px" />
              <Heading size="lg" color="#0FF3F5" mt={0.2} ml={1}>
                PlatziFire
              </Heading>
            </Flex>
          </HStack>
          <WalletData />
        </Flex>
      </Box>
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
