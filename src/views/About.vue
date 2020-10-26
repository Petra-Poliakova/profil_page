<template>
	<div class="about">
		<h1>This is an about page</h1>
		<vue-flip
				:active-hover="true"
				width="200px"
				height="50px"
				transition="2s"
		>
			<template
					v-slot:front
					class="front"
			>
				front
			</template>
			<template
					v-slot:back
					class="back"
			>
				back
			</template>
		</vue-flip>

	</div>
</template>

<script>
// @ is an alias to /src
import VueFlip from "vue-flip";

export default {
	name: "about",
	components: {
		"vue-flip": VueFlip,
	},
};
</script>
