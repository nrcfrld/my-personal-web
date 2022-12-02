// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title:
				"Enrico Feraldo Kalengkongang - UI/UX Design | Fullstack Web Developer",
			meta: [
				{
					name: "description",
					content:
						"Hello I'm Rico. I’m passionate in Product Digital Development, as a Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems.",
				},
				{
					name: "og:title",
					property: "og:title",
					content:
						"Enrico Feraldo Kalengkongang - UI/UX Design | Fullstack Web Developer",
				},
				{
					name: "og:url",
					property: "og:url",
					content: "https://nrcfrld.netlify.app",
				},
				{
					name: "og:description",
					property: "og:description",
					content:
						"Hello I'm Rico. I’m passionate in Product Digital Development, as a Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems.",
				},
			],
		},
	},
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
