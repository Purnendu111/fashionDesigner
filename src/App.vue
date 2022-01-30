<template>
	<!-- <div class="App"> -->
	<!-- <div class="navDiv" id="navDivContainer">
			<TopNavMenu />
		</div>
		<b-container
			id="mainBodyContainer"
			class="mainBodyContainer bv-example-row bv-example-row-flex-cols"
			:style="height"
			style="margin: 0"
		>
			<router-view />
		</b-container>
	</div> -->

	<div id="app">
		<div id="navDivContainer" class="navDivContainer">
			<TopNavMenu />
		</div>
		<div id="bodyContainer" class="bodyContainer" :style="height">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import TopNavMenu from "./components/navMenu/TopNavMenu.vue";
export default {
	name: "App",
	components: {
		TopNavMenu,
	},
	data() {
		return {
			height: "",
		};
	},
	mounted() {
		var self = this;
		window.addEventListener(
			"resize",
			function () {
				self.tbodyHt();
			},
			true
		);
		self.tbodyHt();
	},
	methods: {
		tbodyHt() {
			var h = window.innerHeight,
				w = window.innerWidth,
				navDivContainerHt =
					document.getElementById("navDivContainer").offsetHeight;
			var ht = parseFloat(h) - parseFloat(navDivContainerHt) + "px";
			this.height =
				"height:" +
				ht +
				"; max-height: " +
				ht +
				"; max-width: " +
				w +
				"px !important;";
		},
	},
};
</script>

<style>
.App {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100% !important;
}
</style>
