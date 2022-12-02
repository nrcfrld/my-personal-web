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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="w-8 h-8 text-orange-500 relative z-10"
		>
			<path
				d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
			/>
		</svg>
		<h1
			class="relative z-10 text-3xl font-bold text-center tracking-widest hover:text-purple-200 duration-500"
		>
			Aku Sayang Widya
		</h1>
		<nuxt-link class="mt-8 inline-block relative z-10" to="/"
			>Back to Home</nuxt-link
		>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
