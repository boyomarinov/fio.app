<template>
    <div class="home-page">
        <content-header :icon="icon" :text="title">
        </content-header>
        <
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
            icon: 'ff-home',
            title: 'Dashboard'
        }
    }
}
</script>
