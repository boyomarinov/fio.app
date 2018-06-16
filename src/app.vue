<template>
    <v-app>
        <app-header></app-header>
        <v-content>
            <router-view class="scroll-container">
            </router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppHeader from '@/components/header/app-header.vue';

export default {
    components: {
        AppHeader
    }
}
</script>

<style lang="stylus" scoped>
    .scroll-container
        height 100%
        overflow-y scroll

    .content
        max-height 100vh
</style>
