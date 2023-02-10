<template>
	<div>
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

		<div id="work-history" class="mt-12">
			<div
				class="mx-auto border-4 flex justify-center p-4 w-fit rounded-full border-indigo-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-indigo-400"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
					/>
				</svg>
			</div>
			<h2 class="text-center text-xl py-4">Work History</h2>
			<hr class="bg-slate-800 h-2 border-0 w-16 mx-auto" />
			<div class="mt-8">
				<div
					v-for="workHistory in workHistories"
					:key="workHistory.id"
					class="flex gap-6"
				>
					<h3 class="text-indigo-300 font-semibold">
						{{ workHistory.attributes.duration }}
					</h3>
					<p class="text-neutral-300">{{ workHistory.attributes.company }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Ref } from "vue";

export default defineComponent({
	async setup() {
		const graphql = useStrapiGraphQL();

		let loading = ref(false);
		let menu = ref("about");
		let workHistories: Ref<any[]> = ref([]);

		onMounted(async () => {
			loading.value = false;
			// await login({ identifier: "public-user", password: "asdfasdf" });

			const graphRes: any = await graphql(`
				query {
					workHistories(sort: "sequence:asc") {
						data {
							id
							attributes {
								company
								duration
								description
								sequence
							}
						}
					}
				}
			`);

			console.log(graphRes);

			workHistories.value = graphRes.data.workHistories.data;
		});

		return {
			workHistories,
		};
	},
});
</script>

<style lang="scss" scoped></style>
