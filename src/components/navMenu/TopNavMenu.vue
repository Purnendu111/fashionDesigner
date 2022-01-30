<template>
	<div>
		<b-nav toggleable="lg">
			<b-nav-item>
				<router-link to="/"
					><img
						src="../../assets/fashionLogo.png"
						height="100"
						width="100"
				/></router-link>
			</b-nav-item>
		</b-nav>
	</div>
</template>

<script>
export default {
	name: "TopNavMenu",
	data() {
		return {
			userName: "",
			type: "",
		};
	},
};
</script>
