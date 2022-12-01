<template>
	<main class="max-w-screen-sm mx-auto px-4">
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

		<section class="mt-8">
			<div v-if="menu === 'work'">
				<template v-if="!loading">
					<div
						v-if="works.length > 0"
						class="grid grid-cols-1 sm:grid-cols-2 gap-6"
					>
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
		</section>
		<Footer />
	</main>
</template>

<script lang="ts" setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import ProfileCard from "@/components/partials/ProfileCard.vue";
import ProjectCard from "@/components/elements/ProjectCard.vue";
import { Ref } from "vue";

let loading = ref(true);
let menu = ref("work");

const graphql = useStrapiGraphQL();
const { login } = useStrapiAuth();
let works: Ref<any[]> = ref([]);

await login({ identifier: "public-user", password: "asdfasdf" });

onMounted(async () => {
	const graphRes: any = await graphql(`
		query {
			works(sort: "createdAt:desc") {
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

	works.value = graphRes.data.works.data;
	loading.value = false;
});
</script>

<style lang="scss"></style>
