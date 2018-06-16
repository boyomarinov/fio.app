<template>
    <div class="home-page">
        <content-header :icon="icon" :text="title">
        </content-header>

        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="day in days" xs4>
                    <v-card tile>
                        <day :day="day"></day>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import ContentHeader from '@/components/core/content-header.vue';
    import Day from '@/components/day/day.vue';

    export default {
        components: {
            ContentHeader,
            Day
        },
        data() {
            return {
                icon: 'ff-home',
                title: 'Active menu',
                days: [
                    { id: 1, value: 'Monday' },
                    { id: 2, value: 'Tuesday' },
                    { id: 3, value: 'Wednesday' },
                    { id: 3, value: 'Thursday' },
                    { id: 3, value: 'Friday' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>