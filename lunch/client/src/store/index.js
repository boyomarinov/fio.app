import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    plugins: [
        // default local storage
        createPersistedState({ storage: window.sessionStorage }) 
    ],
    
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
        isAuthenticated: (state) => true,//!!state.token && !!state.user,
        user: (state) => { return { avatarUrl: '', fullName: 'Ivancho' } },
        token: (state) => state.token 
    }
});