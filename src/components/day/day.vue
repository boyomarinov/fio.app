<template>
    <div class="day">
        <v-card-title>{{ formattedDay }}</v-card-title>
    </div>
</template>

<script>
    export default {
        props: {
            day: Array
        },
        computed: {
            formattedDay() {
                return this.day.value;
            }
        }
    }
</script>

<style scoped>
    .day {
        margin: 10px;
        min-height: 500px;
    }
</style>
