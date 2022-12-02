<template>
	<div class="relative hover:scale-105 duration-300">
		<a :href="work.link" target="_blank">
			<img
				class="rounded-lg"
				:src="`${work.thumbnail.data.attributes.url}`"
				:alt="work.title"
			/>
			<div
				class="absolute bottom-4 bg-slate-800 w-100 -right-1 -left-1 -rotate-1 text-center py-2"
			>
				<h3 class="text-indigo-400 font-semibold truncate px-2">
					<a href="#">{{ work.title }}</a>
				</h3>
				<p class="text-sm">{{ work.tags }}</p>
			</div>
		</a>
	</div>
</template>

<script lang="ts">
import Work from "~/types/Work";

export default defineComponent({
	props: {
		work: {
			type: Object as () => Work,
			required: true,
		},
	},
	setup({ work }) {
		const config = useRuntimeConfig();

		return {
			work,
			baseUrl: config.public.strapi.url,
		};
	},
});
</script>

<style lang="scss" scoped></style>
