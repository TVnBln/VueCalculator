import { createStore} from "vuex";
import { createLogger} from "vuex";
import VuexPersist from 'vuex-persist'
import { mutations} from './mutations';
import actions from './actions';

const vuexPersist = new VuexPersist({
    key: 'calculator',
    storage: window.localStorage
})

export const store = createStore({
    state: {
        calculations: [],
        calculation: '',
        display: '',
        extra: false,
        output: '',
        showHistory: false,
        calculator: true,
        scientific: false,
        // links: [
        //     {
        //         name: 'area',
        //         active: true,
        //         component: 'AreaConverter'
        //     },
        //     {
        //         name: 'length',
        //         active: false,
        //         component: 'LengthConverter'
        //     }
        // ]
        links: ['Area']
    },
    actions,
    mutations,
    plugins: [createLogger(), vuexPersist.plugin],
    getters: {
        activeRoute(state) {
            return state.links.find(link => link.active === true)
        }
    }
})
