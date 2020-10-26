<template>
	<div class="home">
		<vue-displacement-slideshow
				:images="images"
				displacement="require('../assets/image1.jpg')"
				:intensity="0.2"
				:speedIn="1.4"
				:speedOut="1.4"
				ease="expo.out"
				ref="slideshow"
				preserveAspectRatio="true"
				height="700px"
		></vue-displacement-slideshow>
		<div class="container mx-auto">
			<div class="description">
				<h2>Špecialisti na destinácie</h2>
				<div class="row separator"></div>
				<div class="row text-left col-12 pt-5">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ultricies nulla. Integer iaculis laoreet neque id bibendum. Proin sapien neq bibend. </p>
				</div>
				<div class="row text-left">
					<div class="col-8">
						<p>Aenean eu laoreet sem. Fusce aliquet elit tincidunt, condimentum odio vulputate, consectetur vulputate ligula. Cras sit amet felis vestibulum, cursus sapien tempor, fermentum neque.</p>
						<p>Nullam aliquet nulla at massa hendrerit ultricies. Nulla rhoncus a nisi sed convallis. Curabitur ac risus tempus, posuere quam eu, faucibus nunc. Etiam ut velit et dolor iaculis semper. Sed cursus purus dolor, in semper leo suscipit nec. Proin non varius tellus, eu fermentum sapien. Nullam gravida varius malesuada. Sed sed tortor nulla. Nullam eget justo auctor, varius arcu id, semper sem.Curabitur semper semper dignissim. Nullam lorem lectus, tincidunt et quam et, tristique maximus velit.</p>
					</div>
					<div class="col-4 description-image">
						<div class="icon">
							<i class="fas fa-plane-departure"></i>
						</div>
						<div class="description-image-text">
							<h3>Travel portfolio</h3>
						</div>
					</div>
				</div>
				<div class="row text-left col-12">
					<p>Phasellus vestibulum pretium facilisis. Nullam quis enim et leo aliquam semper nec in risus. Praesent placerat ante quis auctor tempor. Mauris non nulla consequat justo semper laoreet eu quis risus.</p>
					<p>It makes a world of difference.</p>
				</div>

			</div>
		</div>
		<!-- -->
		<div class="container-fluid slogan">
			<h2 class="container">&#8221; Tento web slúži iba ako skúšobný projekt.&#8221;</h2>
		</div>

		<!-- https://the-travel-portfolio.co.uk/ -->
		<div class="container my-5">
			<h2>Naše portfólio</h2>
			<div class="row separator"></div>
			<div class="row my-5">

				<div class="col-lg-4 col-sm-10 mx-auto">
					<vue-flip
							:active-hover="true"
							transition="2s"
							width="346px"
							height="365px"
					>
						<template
								v-slot:front
								class="front"
								width="346px"
								height="365px"
						>
							<div
									class="front-img"
									:style="{ backgroundImage: `url(${backgroundUrl})` }"
							>
								<div class="flip-front-text mx-auto">
									<h2>Spoznávanie krajín</h2>
									<p>Quisque mollis eleifend eleifend.</p>
								</div>
							</div>
						</template>
						<template
								v-slot:back
								class="back"
						>
							<div class="back-box">
								<h3>Neque porro quisquam est </h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet sem ac dictum iaculis.</p>
								<p>Cras finibus tincidunt sem sit amet porta. Suspendisse eget ultrices dui. Quisque congue purus ultricies.</p>
								<p> Ut bibendum pharetra sem, nec rutrum est eleifend at.</p>
							</div>

						</template>
					</vue-flip>
				</div>
				<div class="col-lg-4 col-sm-10 mx-auto">
					<vue-flip
							:active-hover="true"
							width="346px"
							height="365px"
							transition="2s"
					>
						<template
								v-slot:front
								class="front"
						>
							<!-- <img
									src="../assets/airport.jpg"
									alt=""
									width="346px"
									height="365px"
							>
							front -->
							<div
									class="front-img "
									:style="{ backgroundImage: `url(${backgroundUrlMiddle})` }"
							>
								<div class="flip-front-text mx-auto">
									<h2>Moderné letisko</h2>
									<p>Quisque mollis eleifend eleifend.</p>
								</div>
							</div>
						</template>
						<template
								v-slot:back
								class="back"
						>
							<div class="back-box">
								<h3>Neque porro quisquam est </h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet sem ac dictum iaculis.</p>
								<p>Cras finibus tincidunt sem sit amet porta. Suspendisse eget ultrices dui. Quisque congue purus ultricies.</p>
								<p> Ut bibendum pharetra sem, nec rutrum est eleifend at.</p>
							</div>
						</template>
					</vue-flip>
				</div>
				<div class="col-lg-4 col-sm-10 mx-auto">
					<vue-flip
							:active-hover="true"
							width="346px"
							height="365px"
							transition="2s"
					>
						<template
								v-slot:front
								class="front"
						>
							<div
									class="front-img"
									:style="{ backgroundImage: `url(${backgroundUrlLast})` }"
							>
								<div class="flip-front-text mx-auto">
									<h2>Korálový útes</h2>
									<p>Quisque mollis eleifend eleifend.</p>
								</div>
							</div>
							<!-- <img
									src="../assets/coral.jpg"
									alt=""
									width="346px"
									height="365px"
							>
							front -->
						</template>
						<template
								v-slot:back
								class="back"
						>
							<div class="back-box">
								<h3>Neque porro quisquam est </h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet sem ac dictum iaculis.</p>
								<p>Cras finibus tincidunt sem sit amet porta. Suspendisse eget ultrices dui. Quisque congue purus ultricies.</p>
								<p> Ut bibendum pharetra sem, nec rutrum est eleifend at.</p>
							</div>
						</template>
					</vue-flip>
				</div>

			</div>
		</div>

	</div>
	<!-- 	<a href='https://www.freepik.com/photos/people'>People photo created by wirestock - www.freepik.com</a> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import VueFlip from "vue-flip";
import backgroundUrl from "../assets/hiker.jpg";
import backgroundUrlMiddle from "../assets/airport.jpg";
import backgroundUrlLast from "../assets/coral.jpg";

export default {
	name: "home",
	data() {
		return {
			backgroundUrl,
			backgroundUrlMiddle,
			backgroundUrlLast,
		};
	},

	components: {
		HelloWorld,
		VueDisplacementSlideshow,
		"vue-flip": VueFlip,
	},

	computed: {
		images() {
			return [
				require("../assets/image1.jpg"),
				require("../assets/image2.jpg"),
				require("../assets/image3.jpg"),
			];
		},
	},
	methods: {
		init() {
			//We loop through all our images by calling the 'next' method of our component every 2 seconds
			setInterval(() => {
				this.$refs.slideshow.next();
			}, 2000);
		},
	},
	mounted() {
		this.init();
	},
};
</script>
<style scoped lang="scss">
h2 {
	color: #ecb093;
}
.vue-displacement-slideshow {
	background-size: cover;
	min-height: 700px;
}
.description {
	position: relative;
	/*top: 122px;*/
	margin: 50px 0px;
}
.separator {
	width: 15%;
	border-bottom: 5px solid #ecb093;
	margin: 0 auto;
	padding: 15px 0px;
}
.description-image {
	width: 100%;
	height: 192px;
	background-color: #ecb093;
	text-align: center;
	color: #fff;
	.icon {
		font-size: 40px;
		padding: 25px 0 10px 0;
	}
	.description-image-text {
		padding-top: 5px;
	}
}
.slogan {
	height: 150px;
	/*top: 150px;*/
	background: #ecb093;
	position: relative;
	h2 {
		color: #fff;
		padding: 55px 0px;
	}
}

.front-img {
	width: 346px;
	height: 365px;
	background-size: cover;
}
.back-box {
	width: 346px !important;
	height: 365px !important;
	background: #ecb093 !important;
	color: #fff;
	padding: 25px;
}
.flip-front-text {
	width: 306px;
	height: 325px;
	/*top: 20px;*/
	position: relative;
	padding: 150px 0;
	h2,
	p {
		color: #fff;
	}
}
</style>
