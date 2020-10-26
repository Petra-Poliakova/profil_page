<template>
	<div id="show-blogs">
		<div class="container">
			<h1>Blog</h1>
			<input
					type="text"
					v-model="search"
					placeholder="search"
			/>
			<div
					v-for="blog in filteredBlogs"
					class="single-blog row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative"
					v-bind:key="blog"
			>
				<div class="col-8 p-4 d-flex flex-column position-static">
					<router-link v-bind:to="'/showBlog/' + blog.id">
						<h2>{{ blog.title }}</h2>
					</router-link>
					<article>{{ blog.content | snippet }}</article>
					<router-link v-bind:to="'/showBlog/' + blog.id">
						<p>Čítať viac</p>
					</router-link>
				</div>
				<div class="more col-4"></div>
			</div>
		</div>
	</div>
</template>
<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
	data() {
		return {
			blogs: [],
			search: "",
		};
	},
	created() {
		this.$http
			.get("https://profile-page-cf2f6.firebaseio.com/posts.json")
			.then(function (data) {
				return data.json();
			})
			.then(function (data) {
				var blogsArray = [];
				for (let key in data) {
					data[key].id = key;
					blogsArray.push(data[key]);
				}
				this.blogs = blogsArray;
				//console.log(this.blogs);
			});
	},
	mixins: [searchMixin],
};
</script>

<style lang="scss" scoped>
//#show-blogs {
//	max-width: 800px;
//	margin: 0px auto;
//}
.single-blog {
	margin: 20px 0;
	text-align: left;
	//box-sizing: border-box;
	//background: #eee;
	//border: 1px dotted #aaa;
}
.more {
	background: #55595c;
}

#show-blogs a {
	color: #ecb093;
	text-decoration: none;
	text-align: left;
}
input[type="text"] {
	padding: 8px;
	width: 100%;
	box-sizing: border-box;
}
</style>