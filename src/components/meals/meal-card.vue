<template>
    <v-card>
        <v-card-media height='200px' :src='absImageUrl'>
        </v-card-media>
        <v-card-title>
            <h4 class="title">{{ meal.name }}</h4>
        </v-card-title>
        <v-card-text>
            {{ meal.description }}
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if='ratingEnabled' @click='rate(1)' flat icon color='blue-grey lighten-5'>
                <v-icon>star</v-icon>
            </v-btn>
            <v-btn v-if='ratingEnabled' @click='rate(2)' flat icon color='blue-grey lighten-4'>
                <v-icon>star</v-icon>
            </v-btn>
            <v-btn v-if='ratingEnabled' @click='rate(3)' flat icon color='blue-grey lighten-3'>
                <v-icon>star</v-icon>
            </v-btn>
            <v-btn v-if='ratingEnabled' @click='rate(4)' flat icon color='blue-grey lighten-2'>
                <v-icon>star</v-icon>
            </v-btn>
            <v-btn v-if='ratingEnabled' @click='rate(5)' flat icon color='blue-grey lighten-1'>
                <v-icon>star</v-icon>
            </v-btn>
            <v-btn v-if='!ratingEnabled && !meal.rating' @click.native='ratingEnabled = true' flat icon color='warning'>
                <v-icon>star</v-icon>
            </v-btn>
            <v-btn v-if='!!meal.rating' icon color='primary' @click.native='removeRating(meal)'>{{ meal.rating }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentHeader from '@/components/core/content-header.vue';

export default {
    components: {
        ContentHeader
    },

    props: {
        mealId: Number
    },

    computed: {     
        meal() {
            return this.$store.getters.getMealById(this.mealId);
        },

        absImageUrl() {
            return `http://localhost:50096${this.meal.imageUrl}`;
        }
    },

    data() {
        return {
            ratingEnabled: false
        }
    },

    methods: {
        rate(rating) {
            this.ratingEnabled = false;
            this.$store.dispatch('updateMeal', { ...this.meal, rating: rating });
        },

        removeRating(meal) {
            this.$store.dispatch('updateMeal', { ...this.meal, rating: 0 });
        }
    }
}
</script>

<style scoped>
    .btn--flat {
        max-width: 30px;
    }
</style>
