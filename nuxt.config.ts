// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/styles/main.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxtjs/strapi"],
	runtimeConfig: {
		public: {
			strapi: {
				url: process.env.NUXT_PUBLIC_STRAPI_URL, // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable,
			},
		},
	},
});
