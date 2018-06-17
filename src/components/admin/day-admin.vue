<template>
    <v-card>
        <v-card-title>
            <h4 class="title">Days</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
            <template v-for='(day, index) in days'>
                <v-list-tile @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>{{ getFormattedDay(day) }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon color='error' @click='removeDay(day)'>
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
                        <h4 class="headline">Day</h4>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-menu offset-y full-width>
                            <v-text-field slot="activator" v-model="day.date" label="Date"></v-text-field>
                            <v-date-picker v-model="day.date"></v-date-picker>
                        </v-menu>
                        <v-select :items="meals" item-text="name" v-model="day.meals[0]" label="Meal 1"></v-select>
                        <v-select :items="meals" item-text="name" v-model="day.meals[1]" label="Meal 2"></v-select>
                        <v-select :items="meals" item-text="name" v-model="day.meals[2]" label="Meal 3"></v-select>
                        <v-select :items="meals" item-text="name" v-model="day.meals[3]" label="Meal 4"></v-select>
                        <v-select :items="meals" item-text="name" v-model="day.meals[4]" label="Meal 5"></v-select>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color='primary' @click.native="dialog = false">Cancel</v-btn>
                        <v-btn flat color='primary' @click.native="createDay()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
    computed: {
        ...mapGetters({
            days: 'days',
            meals: 'meals',
        })
    },

    data() {
        return {
            dialog: false,
            day: {
                date: null,
                meals: [{}, {}, {}, {}, {}]
            }
        }
    },

    created() {
        this.$store.dispatch('loadDays');
        this.$store.dispatch('loadMeals');
    },

    methods: {
        getFormattedDay(day) {
            return moment(day.date).format('dddd DD.MM.YYYY')
        },

        createDay() {
            this.dialog = false
            this.$store.dispatch('createDay', this.day);
        },

        removeDay(day) {
            this.$store.dispatch('removeDay', day)
        }
    }
}
</script>
