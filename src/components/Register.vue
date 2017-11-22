<template>
    <div class='register'>
        <p>Make sure you installed a browser extension for accessing
            Ethereum enabled distributed applications, or "Dapps"! E.g. <a href="https://metamask.io/">MetaMask</a></p>
        <b-form @submit="onSubmit">
            <b-form-group id="userName" label="User Name" label-for="userNameInput">
                <b-form-input id="userNameInput" type="text" v-model="form.userName"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Register</b-button>
        </b-form>
        <b-alert
                :show="alert.countDown"
                dismissible
                :variant="alert.variant"
                @dismissed="alert.countDown = 0"
                @dismiss-count-down="countDownTick">
            <p> in {{alert.countDown}} seconds...</p>
            <b-progress :variant="alert.variant"
                        :max="alert.maxCountDown"
                        :value="alert.countDown"
                        height="4px">
            </b-progress>
        </b-alert>

    </div>
</template>

<script>
import SimpleStudyProvider from '../services/SimpleStudyProvider';

export default {
    name: 'Register',
    data: () => {
        return {
            form: {
                userName: ''
            },
            alert: {
                show: true,
                variant: 'success',
                maxCountDown: 5,
                countDown: 0,
                message: ''
            }
        };
    },
    methods: {
        onSubmit() {
            SimpleStudyProvider.addUser(this.form.userName)
                .then(() => {
                    // this.$router.push('/');
                    this.alert.variant = 'success';
                    this.alert.countDown = this.alert.maxCountDown;
                    alert.message = `User ${this.form.userName} was successfully created. Automatically navigating to dashboard`;
                })
                .catch(e => {
                    // this.$router.push('/');
                    this.alert.variant = 'error';
                    this.alert.countDown = this.alert.maxCountDown;
                });
        },
        countDownTick(newCountDown) {
            this.alert.countDown = newCountDown;
        }
    }
};
</script>

<style scoped>
</style>
