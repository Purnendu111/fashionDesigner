<template>
	<div class="vue-tempalte" style="width: 100%; height: 100%">
		<video-background
			class="mainBodyContainer"
			:src="require(`@/assets/testVideo.mp4`)"
			overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
			style="width: 100%; height: 400px"
		>
			Hello
		</video-background>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
