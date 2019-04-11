<template>
	<div id="app">
		
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			
			<a class="navbar-brand" href="#">
				<router-link style="color: white" to="/">SWAPI UI</router-link>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="profile != null">
				<ul class="navbar-nav mr-auto">
					
					<li class="nav-item">
						<a class="nav-link" href="#">
							<router-link style="color: white" to="/characters">Characters</router-link>
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="#">
							<router-link style="color: white" to="/planets">Planets</router-link>
						</a>
					</li>
					
					<li class="nav-item">
						<a class="nav-link" href="#">
							<router-link style="color: white" to="/species">Species</router-link>
						</a>
					</li>

				</ul>
			</div>

		</nav>

		<router-view/>

	</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		profile() {
			return this.$store.getters.profile
		}
	},
}
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.home {
	padding: 25px;
}

@media screen and (max-width: 600px) {
  .form-control {
    width: 100% !important;
  }
}
</style>
