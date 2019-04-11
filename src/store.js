import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		profile: null
	},
	mutations: {
		setProfile(state, obj) {
			state.profile = obj
		}
	},
	getters: {
		profile: state => state.profile
	}
})
