let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.eth.accounts);
let solc = require('solc');

const code = fs.readFileSync('./contracts/SimpleStudy.sol').toString();
const compiledCode = solc.compile(code);
const abiDefinition = JSON.parse(compiledCode.contracts[':SimpleStudy'].interface);
const simpleStudyContract = web3.eth.contract(abiDefinition);
const byteCode = compiledCode.contracts[':SimpleStudy'].bytecode;
let deployedContract2 = simpleStudyContract.new([], {
    data: byteCode,
    from: web3.eth.accounts[0],
    gasLimit: web3.toHex(90000),
    gasPrice: web3.toHex(20000000000)
});
deployedContract.address
const contractInstance = simpleStudyContract.at(deployedContract.address)

// 3. Interact with the contract in the nodejs console
contractInstance.addPatient.call("2FooBar", "0x286d1713cba89618686d13bb32aed9e4e22d99c5");
contractInstance.getPatientName.call("0x286d1713cba89618686d13bb32aed9e4e22d99c5");
contractInstance.submitQuestionaireForPatient.call("0x286d1713cba89618686d13bb32aed9e4e22d99c5", "foo", "bar", 1, "male");

// contractInstance.totalVotesFor.call('Mikhail')
// contractInstance.voteForCandidate('36', {from: web3.eth.accounts[0]})
// contractInstance.totalVotesFor.call('Mikhail').toLocaleString()