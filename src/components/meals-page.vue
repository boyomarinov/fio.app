<template>
    <div>
        <content-header :text="'Meals'"></content-header>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <template v-for='(meal, index) in meals'>
                    <v-flex class="xs4 md4 lg2">
                        <meal-card :meal-id='meal.id'></meal-card>
                    </v-flex>
                </template>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentHeader from '@/components/core/content-header.vue';
import MealCard from '@/components/meals/meal-card.vue';

export default {
    components: {
        ContentHeader,
        MealCard
    },

    computed: {
        ...mapGetters({
            meals: 'meals'
        })
    },

    created() {
        this.$store.dispatch('loadMeals');
    }
}
</script>