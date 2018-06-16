<template>
    <div>
        <v-navigation-drawer app fixed v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp">
            <v-list>
                <v-list-tile v-for="button in buttons" :key="button.id" :to="button.to">
                    <v-list-tile-action>
                        <v-icon class="fio" :class="button.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ button.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed dark color="primary" :clipped-left="$vuetify.breakpoint.lgAndUp">
            <v-btn flat icon @click.stop="drawer = !drawer">
                <i class="fio ff-bars"></i>
            </v-btn>
            <div class="logo"></div>
            <v-toolbar-title>Lunch</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <user-info></user-info>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    import UserInfo from './user-info.vue'

    export default {
        components: {
            UserInfo
        },

        data() {
            return {
                drawer: false,
                buttons: [
                    { id: 0, icon: 'ff-home', text: 'Dashboard', to: 'home' }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styl/color-scheme'

    .fio.ff-bars
        color text-and-icons
        font-size 16px

    .logo
        height 100%
        width 56px // concrete width of the picture. Don't change
        margin-left 18px
        background url('../../assets/images/fio-logo.svg') center no-repeat
</style>
