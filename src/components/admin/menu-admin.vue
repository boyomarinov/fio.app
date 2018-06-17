<template>
    <v-card>
        <v-card-title>
            <h4 class="title">Menus</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
            <template v-for='(menu, index) in menus'>
                <v-list-tile @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>{{ menu.id }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon color='error' @click='remove(menu)'>
                            <v-icon>delete</v-icon>
                        </v-btn>    
                    </v-list-tile-action>
                </v-list-tile>
            </template>
        </v-list>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-dialog v-model='dialog' max-width='500px' persistent>
                <v-btn flat color='primary' slot='activator'>New</v-btn>
                <v-card>
                    <v-card-title>
                        <h4 class="headline">Menu</h4>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-select :items="days" item-text="date" v-model="menu.days[0]" label="Monday"></v-select>
                        <v-select :items="days" item-text="date" v-model="menu.days[1]" label="Tuesday"></v-select>
                        <v-select :items="days" item-text="date" v-model="menu.days[2]" label="Wednesday"></v-select>
                        <v-select :items="days" item-text="date" v-model="menu.days[3]" label="Thursday"></v-select>
                        <v-select :items="days" item-text="date" v-model="menu.days[4]" label="Friday"></v-select>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color='primary' @click.native="dialog = false">Cancel</v-btn>
                        <v-btn flat color='primary' @click.native="create()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
    computed: {
        ...mapGetters({
            menus: 'menus',
            days: 'days'
        })
    },

    data() {
        return {
            dialog: false,
            menu: {
                days: [{}, {}, {}, {}, {}],
                isActive: false
            }
        }
    },

    created() {
        this.$store.dispatch('loadMenus');
        this.$store.dispatch('loadDays');
    },

    methods: {
        create() {
            this.dialog = false
            this.$store.dispatch('createMenu', this.menu);
        },

        remove(menu) {
            this.$store.dispatch('removeMenu', menu)
        }
    }
}
</script>
