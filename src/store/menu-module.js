import { menuService } from '@/services/rest/menu-service';

export const menuModule = {
    state: {
        activeMenu: {},
    },

    mutations: {
        loadActiveMenu(state, activeMenu) {
            state.activeMenu = activeMenu;
        }
    },

    actions: {
        async loadActiveMenu({ commit }) {
            const activeMenu = await menuService.getActive();
            if (activeMenu) {
                commit('loadActiveMenu', activeMenu)
            }
        }
    },

    getters: {
        activeMenu: state => state.activeMenu
    }
};
