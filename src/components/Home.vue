<template>
	<div class="home">
		<center v-if="storedProfile == null">
			<h3>Who are you?</h3>
			<br>
			<input type="text" class="form-control" v-model="profile.name" placeholder="Tell me your name, traveller...">
			<br><br>
			<h4 v-if="profile.name != ''">Good, good... Now, <b>{{profile.name}}</b>, how do you look like?</h4>
			<br><br>
			<div class="row" v-if="profile.name != ''">
				<div class="col" v-for="(item, index) in avatars" :key="index">
					<img class="avatar" alt="avatar" :src="require('../assets/avatars/' + item + '.png')" @click="setProfile(item)">
				</div>
			</div>
		</center>
		<center v-else>
			<h3>The Force is strong with you, {{ storedProfile.name }}</h3>
			<br>
			<img alt="avatar" :src="require('../assets/avatars/' + storedProfile.avatar + '.png')">
		</center>
	</div>
</template>

<script>
export default {
	name: 'home',
	data: () => ({
		avatars: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
		profile: {
			name: '',
			avatar: ''
		},
	}),
	methods: {
		setProfile(avatar) {
			this.profile.avatar = avatar;
			this.$store.commit('setProfile', this.profile)
		}
	},
	computed: {
		storedProfile() {
			return this.$store.getters.profile
		}
	},
}
</script>

<style scoped>
.avatar {
	width: 100px;
	height: 100px;
	padding: 15px;
	cursor: pointer;
}
.form-control {
	width: 500px;
}
</style>

