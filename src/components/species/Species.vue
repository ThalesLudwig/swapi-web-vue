<template>
	<div class="home">
		<center>
			<br>
			<h3>Search Species</h3>
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
							<th scope="col">Class</th>
							<th scope="col">Language</th>
							<th scope="col">Designation</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(s, index) in data" v-bind:item="s" v-bind:index="index" v-bind:key="s.id">
							<td><b>{{ s.id }}</b></td>
							<td>{{ s.name }}</td>
							<td>{{ s.classification }}</td>
							<td>{{ s.language }}</td>
							<td>{{ s.designation }}</td>
							<td>
								<button type="button" class="btn btn-dark">
									<router-link :to="{ name: 'specie', params: { id: s.id } }">See More</router-link>							
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
	name: "Species",
	data: () => ({
		data: [],
		input: '',
		isLoading: false
	}),
	methods: {
		search() {
			if (this.input.trim().length >= 2) {
				this.isLoading = true
				axios.get(`https://swapi.co/api/species?search=${this.input}`)
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
		},
		setGenderColor(gender) {
			return {
				'badge-male': gender == 'male',
				'badge-female': gender == 'female',
				'badge-na': gender == 'na'
			}
		},
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
.badge-male {
	background-color: darkcyan;
	color: white;	
}
.badge-female {
	background-color: purple;
	color: white;	
}
.badge-na {
	background-color: gray;
	color: white;	
}
a, a:hover, a:link, a:active, a:visited {
	color: white;
	text-decoration: none;
}
</style>
