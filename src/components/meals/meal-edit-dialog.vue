<template>
    <v-dialog v-model='dialog' max-width='500px' persistent>
        <v-btn flat icon color='success' slot='activator'>
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-card-title>
                <h4 class="headline">Edit Meal</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-text-field label="Picture" v-model="imageUrl" @click="pickFile"></v-text-field>
                <input ref="image" accept="image/*" type='file' style="display: none" @change="onFilePicked"/>
                <v-text-field label="Name" v-model="name"></v-text-field>
                <v-text-field label="Description" textarea v-model="description"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color='primary' @click.native="dialog = false">Cancel</v-btn>
                <v-btn flat color='primary' @click.native="save()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { saveFile } from '@/services/rest/resource-service.js';

export default {
    props: {
        meal: Object
    },

    data() {
        return {
            dialog: false,
            image: null,
            name: this.meal.name,
            description: this.meal.description,
            imageUrl: this.meal.imageUrl
        }
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
        
        async save() {
            if (this.image) {
                this.imageUrl = await saveFile(this.image)
            }

            this.$store.dispatch('updateMeal', {
                id: this.meal.id,
                name: this.name,
                description: this.description,
                imageUrl: this.imageUrl
            });

            this.dialog = false;
        }
    }
}
</script>