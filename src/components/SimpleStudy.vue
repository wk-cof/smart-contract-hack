<template>
    <div>
        <b-jumbotron
            header="Simple Study"
            lead="This is an example of a 4-week trial." >
            <p>For each patient a CT must provide the following information</p>
            <b-list-group>
                <b-list-group-item>
                    A filled in questionaire upon enrollment
                </b-list-group-item>
                <b-list-group-item>
                    Body temperature after the week 1
                </b-list-group-item>
                <b-list-group-item>
                    Body temperature after the week 2
                </b-list-group-item>
                <b-list-group-item>
                    Body temperature after the week 3
                </b-list-group-item>
                <b-list-group-item>
                    Body temperature after the week 4
                </b-list-group-item>
            </b-list-group>
            <b-link href="">More info...</b-link>
            <br>
            <b-button variant="outline-success">Enroll</b-button>



        </b-jumbotron>

    </div>
</template>

<script>
/* global web3 */
import simpleStudyArtifacts from '../../build/contracts/SimpleStudy.json';
import { default as contract } from 'truffle-contract';

let SimpleStudy = contract(simpleStudyArtifacts);
SimpleStudy.setProvider(web3.currentProvider);

// // Get the initial account balance so it can be displayed.
// web3.eth.getAccounts(function(err, accs) {
//     if (err != null) {
//     alert("There was an error fetching your accounts.");
//     return;
//     }

//     if (accs.length == 0) {
//     alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
//     return;
//     }

//     accounts = accs;
//     account = accounts[0];

//     self.refreshBalance();
export default {
  SimpleStudy
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  flex: 1 0 50%;
}
</style>
