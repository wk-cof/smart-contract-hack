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
        </b-jumbotron>
        <!-- <row v-if="isRegistered" class="userGreeter">
            <b-badge v-if="isStudyOwner" variant="info">owner</b-badge>
            <h3>You are registered as: "{{userName}}"</h3>
            <b-button variant="primary" href="#/study">Go to study</b-button>
        </row>

        <b-button v-else variant="outline-success">Enroll</b-button> -->
    </div>
</template>

<script>
import simpleStudyArtifacts from '../../build/contracts/SimpleStudy.json';
import { default as contract } from 'truffle-contract';

export default {
    name: 'SimpleStudy',
    data: () => {
        return {
            studyOwner: '',
            SimpleStudy: null,
            accounts: [],
            userName: null
        };
    },
    computed: {
        isStudyOwner: function() {
            return this.studyOwner === this.accounts[0];
        },
        isRegistered: function() {
            return this.userName != null;
        }
    },
    methods: {
        getStudyOwner: function() {
            return this.SimpleStudy.deployed().then(instance => {
                return instance.getStudyOwner.call({from: this.accounts[0]});
            }).then(ownerAddress => {
                this.studyOwner = ownerAddress;
            }).catch(e => {
                console.error(e);
            });
        },
        getMyUserName: function() {
            let account = this.accounts[0];
            return this.SimpleStudy.deployed().then(instance => {
                return instance.getMyUsername.call({from: account});
            }).then(userName => {
                this.userName = userName;
            }).catch(e => {
                this.userName = null;
            });
        }
    },
    created: function() {
        this.SimpleStudy = contract(simpleStudyArtifacts);
        this.SimpleStudy.setProvider(web3.currentProvider);
        /* global web3 */
        let that = this;
        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert('There was an error fetching your accounts.');
                return;
            }
            if (accs.length === 0) {
                alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            that.accounts = accs;
            // that.getStudyOwner();
            // that.getMyUserName();
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
