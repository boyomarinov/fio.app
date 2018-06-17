import * as menuService from '../services/rest/menu-service';
import { createOrder } from "@/services/rest/orders-service";

export const menusModule = {
    state: {
        menus: [],
        activeMenu: {},
        activeMenuSelection: {},
        activeMenuSelectionComplete: false
    },

    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        },

        addMenu(state, menu) {
            state.menus.push(menu);
        },

        removeMenu(state, menu) {
            state.menus.splice(state.menus.indexOf(menu), 1);
        },

        loadActiveMenu(state, activeMenu) {
            state.activeMenu = activeMenu;
        },

        addSelection(state, { day, selectedMeal}) {
            state.activeMenuSelection[day.date] = selectedMeal.id;
            state.activeMenu.days.find((d) => d.date === day.date).complete = true;
        },

        setSelectionComplete(state) {
            const activeMenuDays = state.activeMenu.days;
            state.activeMenuSelectionComplete = activeMenuDays.filter((d) => d.complete).length === activeMenuDays.length;
        },

        submitMenuChoice(state) {
            for (let index in state.activeMenuSelection) {
                createOrder({
                    menu: { id: state.activeMenu.id },
                    day: { id: index },
                    user: { id: 1 },
                    meal: { id: state.activeMenuSelection[index] }
                });
            }
        }
    },
    
    actions: {
        async loadMenus({ commit }) {
            const menus = await menuService.getMenus();
            if (menus) {
                commit('setMenus', menus);
            }
        },

        async createMenu({ commit }, _menu) {
            const menu = await menuService.createMenu(_menu);
            if (menu) {
                commit('addMenu', menu)
            }
        },

        async removeMenu({ commit }, menu) {
            await menuService.removeMenu(menu.id);
            commit('removeMenu', menu);
        },

        async loadActiveMenu({ commit }) {
            const activeMenu = await menuService.getActiveMenu();
            if (activeMenu) {
                commit('loadActiveMenu', activeMenu)
            }
        },

        addSelection({ commit }, { day, selectedMeal }) {
            commit('addSelection', { day, selectedMeal});
        },

        setSelectionComplete({ commit }) {
            commit('setSelectionComplete');
        },

        submitMenuChoice({ commit }) {
            commit('submitMenuChoice');
        }
    },

    getters: {
        menus: state => state.menus,
        activeMenu: state => state.activeMenu,
        activeMenuSelection: state => state.activeMenuSelection,
        activeMenuSelectionComplete: state => state.activeMenuSelectionComplete
    }
};
