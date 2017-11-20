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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list-group {
        flex: 1 0 50%;
    }
</style>
