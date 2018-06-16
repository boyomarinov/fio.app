<template>
    <div class="day">
        <v-card-title>{{ formattedDay }}</v-card-title>
        <v-radio-group v-model="selectedMeal">
            <v-radio v-for="(meal, index) in day.meals" :value="meal.id" :label="meal.name">
                <!--<v-list-tile avatar @click="">-->
                    <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title v-html="meal.name"></v-list-tile-title>-->
                        <!--<v-list-tile-sub-title v-html="meal.description"></v-list-tile-sub-title>-->
                    <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
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
        }
    }
</script>

<style scoped>
    .day {
        margin: 10px;
        padding: 10px;
    }
</style>
