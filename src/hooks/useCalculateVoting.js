import { AppContext } from "../context/AppContext"
import EthersMethod from "../utils/ethers"
import Web3Method from "../utils/web3"
import { useWeb3React } from "@web3-react/core"
import { useContext, useMemo, useState } from "react"
import { useToast } from "@chakra-ui/react";

const useCalculateVoting = () => {
    const { state } = useContext(AppContext);
    const { library, chainId, active } = useWeb3React();
    const [positiveVotes, setPositiveVotes] = useState(0);
    const [negativeVotes, setNegativeVotes] = useState(0);
    const [voting, setVoting] = useState(false);
    const [alreadyVoted, setAlreadyVoted] = useState(false);

    const getData = async () => {
        if (active) {
            let web3;
            if (state.library === "web3") {
                web3 = new Web3Method(chainId, library?.web3.currentProvider);
            } else {
                web3 = new EthersMethod(chainId, library?.ethers);
            }

            const [yesVotes, noVotes, voted] = await Promise.all([
                web3.getYesVotes(),
                web3.getNoVotes(),
                web3.getVote()
            ]);
            setPositiveVotes(yesVotes);
            setNegativeVotes(noVotes);
            setAlreadyVoted(voted !== undefined);
        }

    };

    useMemo(() => {
      getData();
    }, [library, chainId, active]);

    const toast = useToast();

  const handleVote = async (vote) => {
    setVoting(true);
    let web3;
    if (state.library === "web3") {
      web3 = new Web3Method(library?.web3.currentProvider, chainId);
    } else {
      web3 = new EthersMethod(chainId, library?.ethers);
    }
    try {
      const txHash = await web3.vote(vote);
      toast({
        title: "Vote emitted",
        description: txHash,
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error has ocurred",
        status: "error",
      });
    }
    getData();
    setVoting(false);
  };

  const percentYes = (positiveVotes * 100/ (positiveVotes + negativeVotes)).toFixed(2);
  const percentNo = (negativeVotes * 100/ (positiveVotes + negativeVotes)).toFixed(2);

  return {
    positiveVotes,
    percentYes,
    percentNo,
    negativeVotes,
    voting,
    alreadyVoted,
    handleVote
  };
};

export default useCalculateVoting;