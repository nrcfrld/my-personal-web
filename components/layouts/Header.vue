<template>
	<header>
		<nav class="flex justify-between py-3">
			<h1 class="text-xl font-bold">
				<nuxt-link to="/">Enrico Feraldo K.</nuxt-link>
			</h1>
			<!-- <ul class="hidden md:flex">
				<li v-for="(menu, index) in menus" :key="index" class="mx-2">
					<a class="font-medium hover:text-indigo-400 text-sm" href="#">{{
						menu.name
					}}</a>
				</li>
			</ul> -->
		</nav>
	</header>
</template>

<script>
export default {
	name: "Header",
	setup() {
		const menus = [
			{
				name: "About",
				url: "/",
			},
			{
				name: "Blog",
				url: "/",
			},
			{
				name: "Contact",
				url: "/",
			},
		];

		return {
			menus,
		};
	},
};
</script>

<style lang="scss" scoped></style>
