<template>
    <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#/">SmartTrials</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#/metacoin">MetaCoin example</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>{{userNameComputed}}</em>
                    </template>
                    <b-dropdown-item>Address: {{account}}</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
    <router-view/>
    </div>
</template>

<script>
import SimpleStudy from './services/SimpleStudyProvider';

export default {
    name: 'app',
    data: function() {
        return {
            accounts: [],
            userName: ''
        };
    },
    computed: {
        account: function() {
            return this.accounts[0] || 'Undefined';
        },
        userNameComputed: function() {
            return this.userName;
        }
    },
    methods: {
        fetchAccounts() {
            return SimpleStudy.accountsPromise.then(accs => {
                this.accounts = accs;
            });
        },
        fetchUserName() {
            return SimpleStudy.userNamePromise.then(userName => {
                this.userName = userName;
            });
        }
    },
    created: function() {
        this.fetchAccounts();
        this.fetchUserName();
    }
};
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
