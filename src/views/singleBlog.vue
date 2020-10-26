<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<p class="blog-author">Author: {{ blog.author }}</p>
		<p>Kategória:</p>
		<ul class="blog-category">
			<li
					v-for="category in blog.categories"
					v-bind:key="category"
			>{{ category }}</li>
		</ul>

	</div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {},
		};
	},
	created() {
		this.$http
			.get(
				"https://profile-page-cf2f6.firebaseio.com/posts/" +
					this.id +
					".json"
			)
			.then(function (data) {
				return data.json();
			})
			.then(function (data) {
				this.blog = data;
			});
	},
};
</script>

<style scoped lang="scss">
#single-blog {
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background: #eee;
	border: 1px dotted #aaa;
	position: relative;
	top: 130px;
}
</style>
