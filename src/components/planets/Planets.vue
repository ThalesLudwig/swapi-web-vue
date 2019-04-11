<template>
	<div class="home">
		<center>
			<br>
			<h3>Search Planets</h3>
			<br>
			<input type="text" class="form-control" v-model="input" v-on:keyup="search">
			<br>
			<div class="spinner-border text-dark" role="status" v-bind:class="{ 'is-loading': isLoading }">
				<span class="sr-only">Loading...</span>
			</div>

			<div class="table-responsive" v-bind:class="{ 'has-results': (!data.length || input.length <= 1) }">
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Terrain</th>
							<th scope="col">Population</th>
							<th scope="col">Climate</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(p, index) in data" v-bind:item="p" v-bind:index="index" v-bind:key="p.id">
							<td><b>{{ p.id }}</b></td>
							<td>{{ p.name }}</td>
							<td>{{ p.terrain }}</td>
							<td>{{ p.population }}</td>
							<td>{{ p.climate }}</td>
							<td>
								<button type="button" class="btn btn-dark">
									<router-link :to="{ name: 'planet', params: { id: p.id } }">See More</router-link>							
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

		</center>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "Planets",
	data: () => ({
		data: [],
		input: '',
		isLoading: false
	}),
	methods: {
		search() {
			if (this.input.trim().length >= 2) {
				this.isLoading = true
				axios.get(`https://swapi.co/api/planets?search=${this.input}`)
					.then((response) => {
						this.data = response.data.results	
						// sets an id to each element since the API only returns a URL
						this.data.forEach(e => {
							e.id = e.url.split("/")[5]
						});
						this.isLoading = false
					})
					.catch(function (error) {
						this.data = []
						alert(`I felt a great disturbance in the Force... (${error})`)
						this.isLoading = false
					})
			}
		},
		setCors() {
			axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
			axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
		}
	},
	beforeMount() {
		this.setCors()
	}
}
</script>

<style lang="scss" scoped>
.form-control {
	width: 500px;
}
.spinner-border {
	display: none;
	margin: 30px;
}
.is-loading {
	display: block;
}
.has-results {
	display: none;
}
a, a:hover, a:link, a:active, a:visited {
	color: white;
	text-decoration: none;
}
</style>
