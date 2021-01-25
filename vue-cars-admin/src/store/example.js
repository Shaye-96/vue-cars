const state = { example_count: 'example' }
const getters = {}
const mutations = {
    SET_COUNT(state, value) {
        console.log(value)
    }
}
const actions = {}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}