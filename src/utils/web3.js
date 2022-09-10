import Web3 from 'web3/dist/web3.min';
import ContractABI from '../artifacts/Contract'

class Web3Method {
    constructor(chainId, provider) {
        this.address = ContractABI.address;
        this.abi = ContractABI.abi;
        this.web3 = new Web3(provider);
        this.contract = new this.web3.eth.Contract(this.abi, this.address[chainId]);
    }

    async getProposalId() {
        const proposalId = await this.contract.methods.proposalId().call();
        return Number(proposalId);
    }
    
    async getYesVotes() {
        const yesVotes = await this.contract.methods.votesForYes().call();
        return Number(yesVotes);
    }
    async getNoVotes() {
        const noVotes = await this.contract.votesForNo();
        return Number(noVotes);
    }
    
    async getVote() {
        const accounts = await this.web3.eth.getAccounts();
        const vote = await this.contract.methods.getVote(accounts[0]).call();
        return Number(vote) || undefined;
    }
    
    async VOTE_FEE() {
        const VOTE_FEE = await this.contract.VOTE_FEE();
        return Web3.utils.fromWei(VOTE_FEE);
    }
    
    async vote(vote) {
        const fee = await this.VOTE_FEE();
        const accounts = await this.web3.eth.getAccounts();
        const receipt = await this.contract.methods.vote(vote).send({
            from: accounts[0],
            value: Web3.utils.toWei(fee)
        });

        return receipt.transactionHash;
    }
}


export default Web3Method;