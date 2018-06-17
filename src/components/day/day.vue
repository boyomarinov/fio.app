<template>
    <div class="day">
        <v-card-title>{{ formattedDay }}</v-card-title>
        <v-radio-group v-model="selectedMeal">
            <v-radio class="meal" v-for="(meal, index) in day.meals" :value="meal.id" :label="meal.name">
            </v-radio>
        </v-radio-group>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            day: Object
        },
        computed: {
            formattedDay() {
                return moment(this.day.date).format('dddd');
            }
        },
        data() {
            return {
                selectedMeal: {}
            };
        }
    }
</script>

<style scoped>
    .day {
        margin: 10px;
        padding: 10px;
    }

    .meal {
        margin-bottom: 5px;
    }
</style>
