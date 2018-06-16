<template>
    <v-menu offset-y>
        <v-btn flat slot="activator">
            <!--<v-avatar size="36px">-->
                <!--<img :src="$store.getters.user.avatarUrl" />-->
            <!--</v-avatar>-->
            <span class="ml2">{{ $store.getters.user.name }}</span>
        </v-btn>
        <v-list>
            <v-list-tile @click="logout()">
                <i class="fio ff-power-off"></i>
                <span class="ml-2">Log out</span>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
            this.$router.push('login');
        }
    }
}
</script>
