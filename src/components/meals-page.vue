<template>
    <div>
        <content-header :text="'Meals'"></content-header>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <template v-for='(meal, index) in meals'>
                    <v-flex class="xs12 md4 lg3">
                        <v-card>
                            <v-card-media height='200px' src="./images/musaka.png">
                            </v-card-media>
                            <v-card-title>
                                <h4 class="title">{{ meal.name }}</h4>
                            </v-card-title>
                            <v-card-text>
                                {{ meal.description }}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn v-if='ratingEnabled' @click='rate(meal, 1)' flat icon color='blue-grey lighten-5'>
                                    <v-icon>star</v-icon>
                                </v-btn>
                                <v-btn v-if='ratingEnabled' @click='rate(meal, 2)' flat icon color='blue-grey lighten-4'>
                                    <v-icon>star</v-icon>
                                </v-btn>
                                <v-btn v-if='ratingEnabled' @click='rate(meal, 3)' flat icon color='blue-grey lighten-3'>
                                    <v-icon>star</v-icon>
                                </v-btn>
                                <v-btn v-if='ratingEnabled' @click='rate(meal, 4)' flat icon color='blue-grey lighten-2'>
                                    <v-icon>star</v-icon>
                                </v-btn>
                                <v-btn v-if='ratingEnabled' @click='rate(meal, 5)' flat icon color='blue-grey lighten-1'>
                                    <v-icon>star</v-icon>
                                </v-btn>
                                <v-btn v-if='!ratingEnabled' @click.native='ratingEnabled = true' flat icon color='warning'>
                                    <v-icon>star</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </template>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentHeader from '@/components/core/content-header.vue';

export default {
    components: {
        ContentHeader
    },

    computed: {
        ...mapGetters({
            meals: 'meals'
        })
    },

    data() {
        return {
            ratingEnabled: false
        }
    },

    created() {
        this.$store.dispatch('loadMeals');
    },

    methods: {
        rate(meal, rating) {
            meal.rating = rating;
            this.$store.dispatch('updateMeal', meal);
            this.ratingEnabled = false;
        }
    }
}
</script>

<style scoped>
    .btn--flat {
        max-width: 30px;
    }
</style>
