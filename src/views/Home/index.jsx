import { useContext } from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    FormLabel,
    Switch,
    Image,
    Badge,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatGroup,
    StatArrow,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { AppContext } from '../../context/AppContext'
import useCalculateVoting from '../../hooks/useCalculateVoting'
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons"


export const Home = () => {
    const { active } = useWeb3React();
    const { state, switchLibrary } = useContext(AppContext);
    const {
        positiveVotes,
        negativeVotes,
        voting,
        handleVote,
        alreadyVoted,
        percentNo,
        percentYes,
    } = useCalculateVoting();

    return (
        <>

            <Container maxW={'6xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                        color="#fff">
                        Platzi-Protofire Challenge <br />
                        <Text as={'span'} color="#F5CE02">
                            your audience
                        </Text>
                    </Heading>
                    <Text color={'white'} fontSize="lg">
                        This DApp aims to solve a historic human dispute that divides people throughout the nations of the world! For that, we're going to use the blockchain as a technology that allows us to reach a consensus as a community on this question. First, you can choose between these two technologies as a mechanism to vote, they work the same.
                    </Text>
                    <Stack
                        direction={'row'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}
                    >
                        <Stack spacing={5} direction='row' color='#fff' mb='-50'>
                            <Box boxSize='80px'>
                                <Image mb='0px' src='./images/web3js-logo.png' alt='web3.js' />
                            </Box>
                            <Box boxSize='80px'>
                                <Image src='./images/ethersjs-logo.png' alt='ethers.js' />
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={1}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}
                        mt={-50}>
                        <Stack direction="row" mb={12}>
                            <FormLabel htmlFor="email-alerts" mb="0">
                                Web3
                            </FormLabel>
                            <Switch
                                colorScheme="blue"
                                size="lg"
                                onChange={switchLibrary}
                            />
                            <FormLabel htmlFor="email-alerts" mb="0">
                                EtherJS
                            </FormLabel>
                        </Stack>
                    </Stack>
                    <Heading
                        color='#fff'
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
                        Voting
                    </Heading>
                    <Heading color='#fff'>Pineapple Pizza? 🍕{state.library}</Heading>
                    {active ? (
                        <>
                            <Stack
                                direction={'row'}
                                spacing={16}
                                alignSelf={'around'}
                                position={'relative'}>
                                <StatGroup width={"100%"} color='#fff'>
                                    <Stat>
                                        <Box
                                            display={"flex"}
                                            flexDirection={"column"}
                                            alignItems="center"
                                        >
                                            <Stack direction="row" spacing={4}>
                                                <Button
                                                    isLoading={voting}
                                                    isDisabled={alreadyVoted}
                                                    onClick={() => handleVote(2)}
                                                    colorScheme={'green'}
                                                    bg={'green.400'}
                                                    rounded={'full'}
                                                    px={6}
                                                    _hover={{
                                                        bg: 'green.500',
                                                    }}>
                                                    Yes 🍍
                                                </Button>
                                            </Stack>
                                            <StatLabel>Vote for yes</StatLabel>
                                            <StatNumber>{positiveVotes}</StatNumber>
                                            <StatHelpText>
                                                <StatArrow type="increase" />
                                                {`${percentYes}%`}
                                            </StatHelpText>
                                        </Box>
                                    </Stat>
                                    <Stat>
                                        <Box
                                            display={"flex"}
                                            flexDirection={"column"}
                                            alignItems="center"
                                        >
                                            <Stack direction="row" spacing={4}>
                                                <Button
                                                    isLoading={voting}
                                                    isDisabled={alreadyVoted}
                                                    onClick={() => handleVote(1)}
                                                    colorScheme={'orange'}
                                                    bg={'orange.400'}
                                                    rounded={'full'}
                                                    px={6}
                                                    _hover={{
                                                        bg: 'orange.500',
                                                    }}>
                                                    No ❌
                                                </Button>
                                            </Stack>
                                            <StatLabel>Vote for No</StatLabel>
                                            <StatNumber>{negativeVotes}</StatNumber>
                                            <StatHelpText>
                                                <StatArrow type="decrease" />
                                                {`${percentNo}%`}
                                            </StatHelpText>
                                        </Box>
                                    </Stat>
                                </StatGroup>
                            </Stack>
                            {alreadyVoted ? (
                                <Badge mt={2} colorScheme={"yellow"}>
                                    You are emitted vote for this proposal

                                </Badge>
                            ) : (
                                ""
                            )}
                        </>
                    ) : (
                        <Badge mt={2} colorScheme={"red"}>Wallet desconectado</Badge>
                    )
                    }
                </Stack>
            </Container>
        </>
    );
}