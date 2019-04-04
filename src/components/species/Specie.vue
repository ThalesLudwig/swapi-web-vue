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
					<p><b>Classification:</b> {{ data.classification }}</p>
					<p><b>Designation:</b> {{ data.designation }}</p>
					<p><b>Average Height:</b> {{ data.average_height }}m</p>
					<p><b>Skin Colors:</b> {{ data.skin_colors }}</p>
					<p><b>Hair Colors:</b> {{ data.hair_colors }}</p>
					<p><b>Eye Colors:</b> {{ data.eye_colors }}</p>
					<p><b>Average Lifespan:</b> {{ data.average_lifespan }} years</p>
					<p><b>Language:</b> {{ data.language }}</p>
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Specie',
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
			axios.get(`https://swapi.co/api/species/${this.id}`)
				.then((response) => {
					this.data = response.data
					this.isLoading = false
				})
				.catch(function (error) {
					this.data = null
					alert('I felt a great disturbance in the Force... (see logs)')
					console.log(error)
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
