<template>
	<main class="max-w-screen-sm mx-auto px-4">
		<nav
			class="mt-8 flex justify-between py-3 px-3 bg-slate-800 rounded-full text-indigo-200 text-sm relative z-10"
		>
			<div
				class="w-full text-center py-2 rounded-full"
				:class="{ 'bg-neutral-200 text-indigo-900 font-bold': menu === 'work' }"
			>
				<a href="#" @click="menu = 'work'">Work</a>
			</div>
			<div
				class="w-full text-center py-2 rounded-full"
				:class="{
					'bg-neutral-200 text-indigo-900 font-bold': menu === 'about',
				}"
			>
				<a href="#" @click="menu = 'about'">About</a>
				<!-- <NuxtLink to="/about">About</NuxtLink> -->
			</div>
		</nav>

		<section class="mt-8">
			<div v-show="menu === 'work'">
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
			<div v-show="menu === 'about'">
				<p class="text-center py-6 text-gray-400 px-3 text-sm leading-relaxed">
					I’m passionate in Product Digital Development, as a Software Developer
					adept in bringing forth expertise in design, installation, testing and
					maintenance of software systems.
				</p>

				<div class="flex justify-center gap-2 sm:gap-8 mt-8">
					<div
						class="text-center rounded-full border-slate-800 border-4 w-36 h-36 flex flex-col justify-center"
					>
						<p class="text-2xl text-indigo-400 font-bold">3</p>
						<small class="p-3 px-6 inline-block text-xs text-neutral-300"
							>Years work experience</small
						>
					</div>
					<div
						class="text-center rounded-full border-slate-800 border-4 w-36 h-36 flex flex-col justify-center"
					>
						<p class="text-2xl text-indigo-400 font-bold">50+</p>
						<small class="p-3 px-6 inline-block text-xs text-neutral-300"
							>Completed Projects</small
						>
					</div>
					<div
						class="text-center rounded-full border-slate-800 border-4 w-36 h-36 flex flex-col justify-center"
					>
						<p class="text-2xl text-indigo-400 font-bold">50+</p>
						<small class="p-3 px-6 inline-block text-xs text-neutral-300"
							>Happy customers</small
						>
					</div>
				</div>
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
