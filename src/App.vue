<template>
	<div id="app">
		<div id="nav">
			<div class="logo"><img
						alt="Vue logo"
						src="./assets/logo4.png"
						width="221px"
						height="94px"
				></div>
			<ul>
				<li>
					<router-link to="/"><i class="fas fa-home"></i></router-link>
				</li>
				<!-- <li>
					<router-link to="/about">O mne</router-link>
				</li> -->
				<li>
					<router-link to="/showBlog">Blog</router-link>
				</li>
				<li>
					<router-link to="/add">Pridať článok</router-link>
				</li>
				<!-- <li>
					<router-link to="/kontakt">Kontakt</router-link>
				</li> -->

			</ul>

		</div>
		<router-view />
	</div>

</template>

<style scoped lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	//color: #2c3e50;
	color: #2f4858;
}
#nav {
	width: 100%;
	height: 122px;
	padding: 20px 0px 30px 0;
	float: right;
	position: relative;

	//position: fixed;
	//top: 0;
	//box-shadow: 0px 5px 0px #dedede;

	ul {
		list-style: none;
		text-align: center;
		padding-top: 15px;
		float: right;
	}
	ul li {
		display: inline-block;
	}
	ul li a {
		display: block;
		padding: 15px;
		text-decoration: none;
		//color: #aaa;
		color: #2f4858;
		font-weight: 800;
		text-transform: uppercase;
		margin: 0 10px;
	}
	a {
		position: relative;
		overflow: hidden;
		z-index: 1;
		//	font-weight: bold;
		//	color: #2c3e50;
		&.router-link-exact-active {
			color: #ecb093;
		}
		&:hover {
			//color: #555;
			color: #fff;
		}
		&:before {
			transition: all 0.5s;
		}
		&:after {
			display: block;
			position: absolute;
			margin: 0;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			content: "";
			color: transparent;
			width: 1px;
			height: 1px;
			border-radius: 50%;
			background: transparent;
			transition: all 0.5s;
		}
		&:hover:after {
			animation: circle 1.5s ease-in forwards;
		}
	}

	/* Keyframes */
	@keyframes circle {
		0% {
			width: 1px;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			height: 1px;
			z-index: -1;
			//background: #eee;
			background: #fff5ea;
			border-radius: 100%;
		}
		100% {
			//background: #aaa;
			background: #ecb093;
			height: 5000%;
			width: 5000%;
			z-index: -1;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			border-radius: 0;
		}
	}
}
.blog-category {
	text-align: left;
	list-style: none;
	li {
		margin-left: -41px;
	}
}
.blog-author {
	text-align: left;
}
.logo {
	float: left;

	img {
		position: absolute;
		margin: -10px 0px 10px 20px;
	}
}
h2 {
	color: #ecb093;
}
</style>
