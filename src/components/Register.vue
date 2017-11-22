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
            }
        };
    },
    methods: {
        onSubmit() {
            SimpleStudyProvider.addUser(this.form.userName)
                .then(() => {
                    console.log('User Created');
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
};
</script>

<style scoped>
</style>
