import * as dayService from '../services/rest/day-service';

export const daysModule = {
    state: {
        days: []
    },

    mutations: {
        setDays(state, days) {
            state.days = days;
        },
        
        addDay(state, day) {
            state.days.push(day);
        },

        removeDay(state, day) {
            state.days.splice(state.days.indexOf(day), 1);
        }
    },
    
    actions: {
        async loadDays({ commit }) {
            const days = await dayService.getDays();
            if (days) {
                commit('setDays', days);
            }
        },

        async createDay({ commit }, _day) {
            const day = await dayService.createDay(_day);
            if (day) {
                commit('addDay', day)
            }
        },

        async removeDay({ commit }, day) {
            await dayService.removeDay(day.date);
            commit('removeDay', day);
        }
    },

    getters: {
        days: state => state.days
    }
};
