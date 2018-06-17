import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { mealsModule } from './meals-module';
import { daysModule } from './days-module';
import { menusModule } from './menus-module'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    plugins: [
        // default local storage
        createPersistedState({ storage: window.sessionStorage }) 
    ],

    modules: {
        menusModule,
        mealsModule,
        daysModule
    },
    
    state: {
        token: null,
        user: null,
        buttons: [
            { id: 0, text: 'Dashboard', to: 'home' },
            { id: 1, icon: 'settings', text: 'Administration', to: 'admin' },
            { id: 2, icon: 'shopping_cart', text: 'Active Menu', to: 'active-menu' },
            { id: 3, icon: 'fastfood', text: 'Meals', to: 'meals' },
        ]
    },

    mutations: {
        setToken(state, token) {
            state.token = token
        },
    
        setUser(state, user) {
            state.user = user;
        }
    },
    
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
    
        setUser({ commit }, user) {
            commit('setUser', user);
        }
    },

    getters: {
        isAuthenticated: state => state.token || state.user,
        isAdmin: state => state.user === 'admin',
        user: state => state.user,
        token: state => state.token,
    }
});
