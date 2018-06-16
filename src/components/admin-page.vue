<template>
    <div class="home-page">
        <content-header :icon="icon" :text="title">
        </content-header>
        <v-date-picker
                v-model="date"
                :events="arrayEvents"
                first-day-of-week="1"
                event-color="green lighten-1">
        </v-date-picker>
    </div>
</template>

<script>
import ContentHeader from '@/components/core/content-header.vue';

export default {
    components: {
        ContentHeader
    },
    data() {
        return {
            icon: 'ff-cancel',
            title: 'Administration, baby!',
            date: null,
            arrayEvents: null
        }
    },
    mounted () {
        this.arrayEvents = [...Array(5)].map(getNDay);

        function getNDay(item, index) {
            const date = new Date(),
                day = date.getDay(),
                diff = date.getDate() - day + (day === 0 ? -6 : 1) + index;

            return new Date(date.setDate(diff)).toISOString().substr(0, 10);
        }
    },
    methods: {
        functionEvents (date) {
            const [,, day] = date.split('-')
            return parseInt(day, 10) % 3 === 0
        }
    }
}
</script>
