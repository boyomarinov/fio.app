import * as dayService from '../services/rest/day-service';
import moment from 'moment';

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
        },

        setMeals(state, { dayId, meals }) {
            const day = state.days.find((day) => day.date === dayId);
            day.meals = meals;
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
        },

        async addDayMeals({ commit }, day) {
            const dayId = moment(day.date).format('YYYY-MM-DDTHH:mm:ss'),
                meals = await dayService.addMeals(dayId);
            commit('setMeals', { dayId, meals });
        }
    },

    getters: {
        days: state => state.days,
        dayMeals: state => id => state.days.find((d) => d.date === id)
    }
};
