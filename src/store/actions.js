export default {
    addNumberModifier({commit}, x){
        commit('addNumberModifier', x)
    },
    addOperation({commit}, operation) {
        commit('addOperation', operation)
    },
    async calculate({commit}) {
        commit('calculate')
    },
    async addPercent({dispatch, commit}) {
        return dispatch('calculate').then(() => {
            commit('addPercent')
        })
    },
    // route({commit}, name) {
    //
    //     commit('route', name)
    // }
    addMath({commit}, type) {
        commit('addMath', type)
    }
}
