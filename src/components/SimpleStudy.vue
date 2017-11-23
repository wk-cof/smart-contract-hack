<template>
    <div>
        Enrolled patients
        <ul>
            <li v-for="patient in patients">{{patient}}</li>
        </ul>
        <h3>Enroll a patient</h3>
        <b-form @submit="onPatientRegister">
            <b-form-group id="enrollPatientAddress"
                            label="Patient's Wallet Address:" label-for="walletAddressInput">
                <b-form-input id="walletAddressInput"
                            type="text" v-model="form.address" required
                            description="Make sure that the patient has the private key for the wallet you provide"
                            placeholder="e.g. 0x5aeda56215b167893e80b4fe645ba6d5bab767de"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="enrollPatientFirstName"
                            label="First Name:" label-for="firstNameInput">
                <b-form-input id="firstNameInput"
                            type="text" v-model="form.firstName" required
                ></b-form-input>
            </b-form-group>
            <b-form-group id="enrollPatientLastName"
                            label="Last Name:" label-for="lastNameInput">
                <b-form-input id="lastNameInput"
                            type="text" v-model="form.lastName" required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'SimpleStudy',
    data: () => {
        return {
            patients: ['John Doe', 'Alice Foo'],
            form: {
                firstName: '',
                lastName: '',
                address: ''
            }
        };
    },
    computed: {
    },
    methods: {
        onPatientRegister() {

        }
    },
    created: function() {
    }
};
</script>

<style scoped>
</style>
