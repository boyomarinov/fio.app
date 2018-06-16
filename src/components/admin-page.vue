<template>
    <div class="home-page">
        <content-header :icon="icon" :text="title"></content-header>
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex class='xs12 md6 lg3'>
                    <meal-list></meal-list>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ContentHeader from '@/components/core/content-header.vue';
import MealList from '@/components/meal/meal-list.vue';

export default {
    components: {
        ContentHeader,
        MealList
    },

    data() {
        return {
            icon: 'ff-cancel',
            title: 'Administration, baby!',
        }
    }
}
</script>
