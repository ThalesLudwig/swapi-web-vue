<template>
	<div class="home">
		<center>
			<br>
			<h3>Search Characters</h3>
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
							<th scope="col">Gender</th>
							<th scope="col">Birth</th>
							<th scope="col">Hair</th>
							<th scope="col">Skin</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(c, index) in data" v-bind:item="c" v-bind:index="index" v-bind:key="c.id">
							<td><b>{{ c.id }}</b></td>
							<td>{{ c.name }}</td>
							<td><h5><span v-bind:class="setGenderColor(c.gender)" class="badge badge-pill badge-light">{{ c.gender }}</span></h5></td>
							<td>{{ c.birth_year }}</td>
							<td>{{ c.hair_color }}</td>
							<td>{{ c.skin_color }}</td>
							<td>
								<button type="button" class="btn btn-dark">
									<router-link :to="{ name: 'character', params: { id: c.id } }">See More</router-link>							
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
	name: "Characters",
	data: () => ({
		data: [],
		input: '',
		isLoading: false
	}),
	methods: {
		search() {
			if (this.input.trim().length >= 2) {
				this.isLoading = true
				axios.get(`https://swapi.co/api/people?search=${this.input}`)
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
						alert('I felt a great disturbance in the Force... (see logs)')
						console.log(error)
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
.home {
	padding: 20px;
}
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
