# SmartTrials
> BLOCKCHAIN IN CLINICAL TRIALS DESIGN - DISTRIBUTED LEDGER TECHNOLOGY Ha
(https://www.hackathon.com/event/hackathon-blockchain-in-clinical-trials-design---distributed-ledger-technology-38119424224)

## Project Setup
Initial setup was taken from [here](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2).

### Setup Dev environment
Install dependencies in `package.json`
```bash
npm install
```

### Run the local network
```bash
./node_modules/.bin/testprc
```
Notice that the testrpc creates 10 test accounts to play with automatically. These accounts come preloaded with 100 (fake) ethers.

### Deploy the contract
Run interactive node console:
```bash
node
```

Open `./hello_world_voting/script.js` and paste the commands in that file to the node env one by one.

> For the detailed description of each command, refer to the project setup link above.

### Run the dapp
In the node console from the previous section type
```javascript
deployedContract.address
```
Open index.js and paste the result of the above command to the `VotingContract.at` function (line 5).

Then just open index.html in your browser.

