<template>
    <div class="home-page">
        <content-header :icon="icon" :text="title"></content-header>
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex class='xs12 md6 lg3'>
                    <meal-admin></meal-admin>
                </v-flex>
                <v-flex class='xs12 md6 lg3'>
                    <day-admin></day-admin>
                </v-flex>
                <v-flex class='xs12 md6 lg3'>
                    <menu-admin></menu-admin>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ContentHeader from '@/components/core/content-header.vue';
import MealAdmin from '@/components/meals/meal-admin.vue';
import DayAdmin from '@/components/admin/day-admin.vue';
import MenuAdmin from '@/components/admin/menu-admin.vue';

export default {
    components: {
        ContentHeader,
        MealAdmin,
        DayAdmin,
        MenuAdmin
    },

    data() {
        return {
            icon: 'ff-cancel',
            title: 'Administration, baby!',
        }
    }
}
</script>
