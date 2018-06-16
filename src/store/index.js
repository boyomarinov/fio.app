import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { mealModule } from './meals-module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    plugins: [
        // default local storage
        createPersistedState({ storage: window.sessionStorage }) 
    ],

    modules: {
        mealModule
    },
    
    state: {
        token: null,
        user: null
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
        isAuthenticated: (state) => state.token || state.user,
        user: (state) => state.user,
        token: (state) => state.token 
    }
});
