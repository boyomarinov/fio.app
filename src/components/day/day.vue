<template>
    <div class="day">
        <v-card-title>{{ formattedDay }}</v-card-title>
        <v-radio-group v-model="selectedMeal">
            <template v-for="(meal, index) in meals">
                <v-radio class="meal" :value="meal.id" :label="meal.name" @change="onMealSelected(meal)">
                </v-radio>
            </template>
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
            },
            meals() {
                return this.$store.getters.dayMeals(moment(this.day.date).format('YYYY-MM-DDTHH:mm:ss')).meals;
            }
        },
        created() {
            this.$store.dispatch('loadDays');
            this.$store.dispatch('addDayMeals', this.day);
        },
        data() {
            return {
                selectedMeal: {}
            };
        },
        methods: {
            onMealSelected(selectedMeal) {
                this.$store.dispatch('addSelection', {
                    day: this.day,
                    selectedMeal: selectedMeal
                });
                this.$store.dispatch('setSelectionComplete');
            }
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
