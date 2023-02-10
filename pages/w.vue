<template>
	<div class="min-h-screen flex items-center justify-center flex-col relative">
		<svg
			class="absolute top-50 z-0 left-0 right-0 w-96"
			viewBox="0 0 1220 1151"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_1_8)">
				<circle cx="610" cy="541" r="410" fill="url(#paint0_linear_1_8)" />
			</g>
			<defs>
				<filter
					id="filter0_f_1_8"
					x="0"
					y="-69"
					width="1220"
					height="1220"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="100"
						result="effect1_foregroundBlur_1_8"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_1_8"
					x1="610"
					y1="131"
					x2="610"
					y2="951"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#00C2FF" stop-opacity="0" />
					<stop offset="1" stop-color="#FF29C3" />
				</linearGradient>
			</defs>
		</svg>

		<form v-if="!loading" action="" @submit.prevent="onSubmit">
			<div class="flex gap-3 relative z-1">
				<input
					class="w-100 rounded-lg p-3 text-gray-200 bg-gray-800 focus:outline-none"
					type="text"
					placeholder="Ketik nama kamu"
					name="name"
					v-model="name"
				/>
				<button type="submit" class="bg-indigo-900 px-5 py-3 rounded-lg">
					Submit
				</button>
			</div>
		</form>

		<div v-if="loading" class="py-5">
			Tunggu sebentar, sedang mencari {{ name }} di hati aku..
		</div>

		<nuxt-link class="mt-8 inline-block relative z-10" to="/"
			>Back to Home</nuxt-link
		>
	</div>
</template>

<script>
export default {
	setup() {
		const config = useRuntimeConfig();

		let key = config.key
		let name = ref("");
		let loading = ref(false);
		let found = ref(false);
		const onSubmit = () => {
			loading.value = true;
			setTimeout(() => {
				if(name.value.toLowerCase().includes(key)){
					alert(`Haloooo ${key} ❤️`)
					loading.value = false;
				}else{
					alert(`Di hati aku cuman ada ${key} nih gak ada yang lain 😒`);
					loading.value = false;
				}
			}, 2000);
		};

		return {
			onSubmit,
			name,
			loading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
