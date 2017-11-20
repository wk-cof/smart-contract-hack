<template>
    <div>
        <b-jumbotron
            header="Simple Study"
            lead="This is an example of a 4-week trial." >
            <b-badge v-if="isStudyOwner" variant="info">You are the owner</b-badge>
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


let myData = {
    studyOwner: null,
    accounts: null,
    account: null
}

let SimpleStudy = contract(simpleStudyArtifacts);
SimpleStudy.setProvider(web3.currentProvider);

web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
        alert('There was an error fetching your accounts.');
        return;
    }

    if (accs.length === 0) {
        alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
        return;
    }
    myData.accounts = accs;
    myData.account = accounts[0];
    getStudyOwner();
});

const getStudyOwner = () => {
    return SimpleStudy.deployed().then(instance => {
        return instance.getStudyOwner.call({from: myData.account});
    }).then(ownerAddress => {
        myData.studyOwner = ownerAddress;
    }).catch(e => {
        console.log(e);
        // this.setStatus('Error getting study owner; see log.');
    });
};
export default {
    name: 'SimpleStudy',
    data: () => {
        return {
            studyOwner: myData.studyOwner,
            isStudyOwner: false
        };
    },
    watch: {
        studyOwner: () => {
            this.getStudyOwner();
        }
    },
    methods: {
        getStudyOwner: () => {
            this.isStudyOwner = studyOwner === account;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  flex: 1 0 50%;
}
</style>
