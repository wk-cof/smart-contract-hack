<template>
    <div>
        Enrolled patients
        <ul>
            <li v-for="patient in patients">{{patient}}</li>
        </ul>
        <b-button variant="primary" v-on:click="enrollPatientForm">Enroll new patient</b-button>

    </div>
</template>

<script>
import SimpleStudyProvider from '../services/SimpleStudyProvider';

export default {
    name: 'SimpleStudy',
    data: () => {
        return {
            patients: ['John Doe', 'Alice Foo']
        };
    },
    computed: {
        // isAddressValid: () => {
        //     var regexp = /^0x[a-fA-F0-9]+$/;
        //     return this.form && !!this.form.address.match(regexp);
        // }
    },
    methods: {
        enrollPatientForm() {
            this.$router.push('enrollpatient');
        },
        getPatients() {
            SimpleStudyProvider.getPatients()
                .then(patients => {
                    this.patients = [];
                    patients.forEach(patientAddress => {
                        SimpleStudyProvider.getPatientName(patientAddress)
                            .then(([firstName, lastName]) => {
                                this.patients.push(`${firstName} ${lastName}`);
                            })
                            .catch(err => {
                                alert('couldn\'t fetch patients. See log for details');
                                console.error(err);
                            });
                    });
                })
                .catch(err => {
                    alert('couldn\'t fetch patients. See log for details');
                    console.error(err);
                });
        }
    },
    created: function() {
        this.getPatients();
    }
};
</script>

<style scoped>
</style>
