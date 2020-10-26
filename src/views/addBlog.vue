<template>
	<div id="add-blog">
		<h2>Pridaj nový článok do blogu</h2>
		<form v-if="!submitted">
			<label>Názov článku:</label>
			<input
					type="text"
					v-model.lazy="blog.title"
					required
			/>
			<label>Obsah článku:</label>
			<textarea v-model.lazy.trim="blog.content"></textarea>
			<div id="checkboxes">
				<p>Kategórie:</p>
				<label>Móda</label>
				<input
						type="checkbox"
						value="Móda"
						v-model="blog.categories"
				/>
				<label>Cestovanie</label>
				<input
						type="checkbox"
						value="Cestovanie"
						v-model="blog.categories"
				/>
				<label>Zdravie</label>
				<input
						type="checkbox"
						value="Zdravie"
						v-model="blog.categories"
				/>
				<label>Lifestyle</label>
				<input
						type="checkbox"
						value="Lifestyle"
						v-model="blog.categories"
				/>
			</div>
			<label>Author:</label>
			<select v-model="blog.author">
				<option
						v-for="author in authors"
						v-bind:key="author"
				>{{ author }}</option>
			</select>
			<hr />
			<button v-on:click.prevent="post">Pridať</button>
		</form>
		<div v-if="submitted">
			<h3>Ďakujeme za pridanie vášho článku</h3>
		</div>
	</div>
</template>

<script>
// Imports

export default {
	data() {
		return {
			blog: {
				title: "",
				content: "",
				categories: [],
				author: "",
			},
			authors: ["Petra", "Zuzana", "Lucia"],
			submitted: false,
		};
	},
	methods: {
		post: function () {
			this.$http
				.post(
					"https://profile-page-cf2f6.firebaseio.com/posts.json",
					this.blog
				)
				.then(function (data) {
					console.log(data);
					this.submitted = true;
				});
		},
	},
};
</script>

<style lang="scss">
#add-blog * {
	box-sizing: border-box;
}
#add-blog {
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}
label {
	display: block;
	margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
	display: block;
	width: 100%;
	padding: 8px;
}
textarea {
	height: 200px;
}
#preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3 {
	margin-top: 10px;
}
#checkboxes input {
	display: inline-block;
	margin: 0px 10px;
}
#checkboxes label {
	display: inline-block;
	margin-top: 0;
}
hr {
	display: none;
}
button {
	display: block;
	margin: 20px 0;
	background: #ecb093;
	color: #fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
}
</style>
