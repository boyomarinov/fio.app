<template>
    <div class="home-page">
        <content-header></content-header>

        <v-container fluid grid-list-md>
            <v-layout row nowwrap>
                <v-flex v-for="day in activeMenu.days" xs12 md6 lg3>
                    <v-card tile>
                        <day :day="day"></day>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="submitChoice()">Submit choice</v-btn>
        </v-container>
    </div>
</template>

<script>
    import ContentHeader from '@/components/core/content-header.vue';
    import Day from '@/components/day/day.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            ContentHeader,
            Day
        },
        computed: {
            ...mapGetters({
                activeMenu: 'activeMenu'
            })
        },
        created() {
            this.$store.dispatch('loadActiveMenu');
        },
        methods: {
            submitChoice() {
                this.$store.dispatch('submitMenuChoice');
            },
            getDisabled() {
                return !this.$store.activeMenuSelectionComplete;
            }
        }
    }
</script>

<style scoped>

</style>
