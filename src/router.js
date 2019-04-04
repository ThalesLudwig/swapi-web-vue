import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

import Characters from './components/characters/Characters.vue'
import Character from './components/characters/Character.vue'
import Planets from './components/planets/Planets.vue'
import Planet from './components/planets/Planet.vue'
import Species from './components/species/Species.vue'
import Specie from './components/species/Specie.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/characters',
			name: 'characters',
			component: Characters
		},
		{
			path: '/character/:id',
			name: 'character',
			component: Character,
			props: true
		},
		{
			path: '/planets',
			name: 'planets',
			component: Planets
		},
		{
			path: '/planet/:id',
			name: 'planet',
			component: Planet,
			props: true
		},
		{
			path: '/species',
			name: 'species',
			component: Species
		},
		{
			path: '/specie/:id',
			name: 'specie',
			component: Specie,
			props: true
		},
	]
})
