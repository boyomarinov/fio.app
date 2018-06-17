<template>
    <v-card>
        <v-card-title>
            <h4 class="title">Meals</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
            <template v-for='(meal, index) in meals'>
                <v-list-tile @click>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ meal.name }} ({{ meal.rating }})</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon color="success" @click='editMeal(meal)'>
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </v-list-tile-action>
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
                        <v-text-field label="Picture" v-model="image.name" @click="pickFile"></v-text-field>
                        <input ref="image" accept="image/*" type='file' style="display: none" @change="onFilePicked"/>
                        <v-text-field label="Name" v-model="meal.name"></v-text-field>
                        <v-text-field label="Description" textarea v-model="meal.description"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color='primary' @click.native="cancel()">Cancel</v-btn>
                        <v-btn flat color='primary' v-if='!meal.id' @click.native="createMeal()">Save</v-btn>
                        <v-btn flat color='primary' v-if='!!meal.id' @click.native="updateMeal()">Update</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { saveFile } from '@/services/rest/resource-service.js';

export default {
    computed: {
        ...mapGetters({
            meals: 'meals'
        })
    },

    data() {
        return {
            dialog: false,
            image: {},
            meal: {
                name: '',
                description: '',
                imageUrl: ''
            }
        }
    },

    created() {
        this.$store.dispatch('loadMeals');
    },

    methods: {
        pickFile () {
            this.$refs.image.click();
        },

        onFilePicked(e) {
            const files = e.target.files;
            if (files[0]) {
                this.image = files[0];
            }
        },

        async createMeal() {
            await this.saveImage()
            this.$store.dispatch('createMeal', this.meal);
            this.cancel();
        },
        
        async updateMeal() {
            await this.saveImage()
            this.$store.dispatch('updateMeal', this.meal);
            this.cancel();
        },
        
        async saveImage() {
            if (this.image) {
                const imageUrl = await saveFile(this.image);
                this.meal.imageUrl = `${imageUrl}/image`;
            }
        },

        editMeal(meal) {
            this.dialog = true;
            this.meal = meal;
        },

        removeMeal(meal) {
            this.$store.dispatch('removeMeal', meal)
        },

        cancel() {
            this.dialog = false; 
            this.meal = {};
        }
    }
}
</script>

<style scoped>
    .list__tile__action {
        min-width: 35px;
    }
</style>
