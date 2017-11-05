Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts
code = fs.readFileSync('Voting.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Mikhail','Anya','Martin'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
deployedContract.address
contractInstance = VotingContract.at(deployedContract.address)

// 3. Interact with the contract in the nodejs console
contractInstance.totalVotesFor.call('Mikhail')
contractInstance.voteForCandidate('Mikhail', {from: web3.eth.accounts[0]})
contractInstance.voteForCandidate('Mikhail', {from: web3.eth.accounts[0]})
contractInstance.voteForCandidate('Mikhail', {from: web3.eth.accounts[0]})
contractInstance.totalVotesFor.call('Mikhail').toLocaleString()