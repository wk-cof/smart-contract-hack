import simpleStudyArtifacts from '../../build/contracts/SimpleStudy.json';
import { default as contract } from 'truffle-contract';

let SimpleStudy = contract(simpleStudyArtifacts);
let loadFinished = false;

SimpleStudy.setProvider(web3.currentProvider);
let accountsPromise = new Promise(function(resolve, reject) {
    /* global web3 */
    web3.eth.getAccounts(function(err, accs) {
        loadFinished = true;
        if (err != null) {
            alert('There was an error fetching your accounts.');
            reject('There was an error fetching your accounts.');
        }
        if (accs.length === 0) {
            alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
            reject('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
        }
        resolve(accs);
    });
});

let userNamePromise = accountsPromise.then(accs => {
    let accounts = accs;
    return SimpleStudy.deployed().then(instance => {
        return instance.getMyUsername.call({from: accounts[0]});
    });
})


export default {
    accountsPromise,
    userNamePromise
};
