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
        <b-button v-if="isRegistered" variant="primary">Go to study</b-button>
        <b-button v-else variant="primary">Register</b-button>
    </div>
</template>

<script>
import SimpleStudyProvider from '../services/SimpleStudyProvider';

export default {
    data: function() {
        return {
            isRegistered: false
        };
    },
    methods: {
        checkRegistered() {
            return SimpleStudyProvider.userNamePromise.then(() => {
                this.isRegistered = true;
            }).catch(e => {
                this.isRegistered = false;
            });
        }
    },
    created: function() {
        this.checkRegistered();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
