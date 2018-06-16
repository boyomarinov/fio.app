<template>
    <v-card>
        <v-card-title>
            <h4>Meals</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
            <template v-for='(meal, index) in meals'>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ meal.name }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon color='error' @click='removeMeal(meal)'>
                            <v-icon>delete</v-icon>
                        </v-btn>    
                    </v-list-tile-action>
                </v-list-tile>
            </template>
        </v-list>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-dialog v-model='dialog' max-width='500px' persistent>
                <v-btn flat color='primary' slot='activator'>New</v-btn>
                <v-card>
                    <v-card-title>
                        <h4 class="headline">Meal</h4>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-text-field label="Name" v-model="meal.name"></v-text-field>
                        <v-text-field label="Description" textarea v-model="meal.description"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color='primary' @click.native="dialog = false">Cancel</v-btn>
                        <v-btn flat color='primary' @click.native="createMeal()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            meals: 'meals'
        })
    },

    data() {
        return {
            dialog: false,
            meal: {
                name: '',
                description: ''
            }
        }
    },

    created() {
        this.$store.dispatch('loadMeals');
    },

    methods: {
        createMeal() {
            this.dialog = false
            this.$store.dispatch('createMeal', this.meal);
        },

        removeMeal(meal) {
            this.$store.dispatch('removeMeal', meal)
        }
    }
}
</script>
