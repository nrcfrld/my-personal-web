<template>
	<div class="max-w-screen-sm mx-auto px-4">
		<Header />
		<ProfileCard />
		<nav
			class="mt-8 flex justify-between py-3 px-3 bg-slate-800 rounded-full text-indigo-200 text-sm"
		>
			<div
				class="w-full text-center py-2 rounded-full"
				:class="{ 'bg-neutral-200 text-indigo-900 font-bold': menu === 'work' }"
			>
				<a href="#" @click="menu = 'work'">Work</a>
			</div>
			<div
				class="w-full text-center py-2 rounded-xl"
				:class="{
					'bg-neutral-200 text-indigo-900 font-bold': menu === 'about',
				}"
			>
				<!-- <a href="#" @click="menu = 'about'">About</a> -->
				<nuxt-link to="/about">About</nuxt-link>
			</div>
		</nav>

		<section class="mt-4">
			<div v-if="menu === 'work'">
				<template v-if="!loading">
					<div v-if="works.length > 0" class="grid grid-cols-2 gap-4">
						<ProjectCard
							v-for="(work, i) in works"
							:key="i + 'project'"
							:work="work.attributes"
						/>
					</div>
					<div v-else class="text-center text-lg py-16">
						There is no data here
					</div>
				</template>
				<template v-else>
					<p class="text-center py-16">Loading...</p>
				</template>
			</div>
			<div v-if="menu === 'about'">About</div>
		</section>
		<Footer />
	</div>
</template>

<script lang="ts" setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import ProfileCard from "@/components/partials/ProfileCard.vue";
import ProjectCard from "@/components/elements/ProjectCard.vue";

let loading = ref(false);
let menu = ref("work");

const graphql = useStrapiGraphQL();
const { login } = useStrapiAuth();

await login({ identifier: "nrcfrld@gmail.com", password: "asdfasdf" });

const graphRes: any = await graphql(`
	query {
		works {
			data {
				attributes {
					title
					tags
					thumbnail {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`);

const works: any[] = graphRes.data.works.data;

onMounted(() => {
	loading.value = false;
});
</script>

<style lang="scss"></style>
