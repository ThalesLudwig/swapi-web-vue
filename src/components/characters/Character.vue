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
					<p><b>Birth Year:</b> {{ data.birth_year }}</p>
					<p><b>Eye Color:</b> {{ data.eye_color }}</p>
					<p><b>Gender:</b> {{ data.gender }}</p>
					<p><b>Hair Color:</b> {{ data.hair_color }}</p>
					<p><b>Height:</b> {{ data.height }}</p>
					<p><b>Mass:</b> {{ data.mass }}</p>
					<p><b>Skin Color:</b> {{ data.skin_color }}</p>
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Character',
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
			axios.get(`https://swapi.co/api/people/${this.id}`)
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
