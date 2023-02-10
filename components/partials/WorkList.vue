<template>
	<div>
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
			<div v-else class="text-center text-lg py-16">There is no data here</div>
		</template>
		<template v-else>
			<p class="text-center py-16">Loading...</p>
		</template>
	</div>
</template>

<script lang="ts">
import { Ref } from "vue";
import ProjectCard from "../elements/ProjectCard.vue";

export default {
	components: {
		ProjectCard,
	},
	setup(this, props, ctx) {
		let loading = ref(true);

		const graphql = useStrapiGraphQL();
		let works: Ref<any[]> = ref([]);

		onMounted(async () => {
			try {
				const graphRes: any = await graphql(`
					query {
						works(sort: "createdAt:desc") {
							data {
								attributes {
									title
									tags
									link
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
			} catch (error) {}
		});

		return {
			loading,
			works,
		};
	},
};
</script>

<style lang="scss" scoped></style>
