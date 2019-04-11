<template>
	<div class="container-fluid">
		<center>
			<div class="spinner-border text-dark" role="status" v-bind:class="{ 'is-loading': isLoading }">
				<span class="sr-only">Loading...</span>
			</div>
		</center>
		<div class="card" v-if="data">
			<div class="card-body">
				<h1 class="card-title">{{ data.name }}</h1>
				<br>
				<div class="card-text">
					<p><b>Rotation Period:</b> {{ data.rotation_period }}</p>
					<p><b>Orbital Period:</b> {{ data.orbital_period }}</p>
					<p><b>Diameter:</b> {{ data.diameter }}</p>
					<p><b>Climate:</b> {{ data.climate }}</p>
					<p><b>Gravity:</b> {{ data.gravity }}</p>
					<p><b>Terrain:</b> {{ data.terrain }}</p>
					<p><b>Population:</b> {{ data.population }}</p>
					<p><b>Water:</b> {{ data.surface_water }}%</p>
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Planet',
	props: {
		id: String
	},
	data: () => ({
		data: null,
		isLoading: false
	}),
	methods: {
		setCors() {
			axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
			axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
		},
		getData() {
			this.isLoading = true
			axios.get(`https://swapi.co/api/planets/${this.id}`)
				.then((response) => {
					this.data = response.data
					this.isLoading = false
				})
				.catch(function (error) {
					this.data = null
					alert(`I felt a great disturbance in the Force... (${error})`)
					this.isLoading = false
				})
		},
	},
	beforeMount() {
		this.setCors()
		this.getData()
	},
}
</script>

<style scoped lang="scss">
.card {
	margin: 20px;
}
.spinner-border {
	display: none;
	margin: 30px;
}
.is-loading {
	display: block;
}
</style>
