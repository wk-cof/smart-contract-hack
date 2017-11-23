<template>
    <div>
        <h3>Enroll a patient</h3>
        <b-form @submit="onPatientRegister">
            <b-form-group id="enrollPatientAddress"
                            label="Patient's Wallet Address:" label-for="walletAddressInput">
                <b-form-input id="walletAddressInput"
                            type="text" v-model="form.address" required pattern="^0x[a-fA-F0-9]+$"
                            description="Make sure that the patient has the private key for the wallet you provide"
                            placeholder="e.g. 0x5aeda56215b167893e80b4fe645ba6d5bab767de"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group id="enrollPatientFirstName"
                            label="First Name:" label-for="firstNameInput">
                <b-form-input id="firstNameInput"
                            type="text" v-model="form.firstName" required minlength="2"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="enrollPatientLastName"
                            label="Last Name:" label-for="lastNameInput">
                <b-form-input id="lastNameInput"
                            type="text" v-model="form.lastName" required minlength="2"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
import SimpleStudyProvider from '../services/SimpleStudyProvider';

export default {
    name: 'SimpleStudy',
    data: () => {
        return {
            form: {
                firstName: '',
                lastName: '',
                address: ''
            }
        };
    },
    computed: {
        // isAddressValid: () => {
        //     var regexp = /^0x[a-fA-F0-9]+$/;
        //     return this.form && !!this.form.address.match(regexp);
        // }
    },
    methods: {
        onPatientRegister() {
            SimpleStudyProvider.enrollPatient(this.form.address, this.form.firstName, this.form.lastName)
                .then(() => {
                    alert('patient enrolled');
                    this.$router.push('simplestudy');
                })
                .catch(err => {
                    alert('errror, see console');
                    console.error(err);
                });
        }

    }
};
</script>

<style scoped>
</style>
