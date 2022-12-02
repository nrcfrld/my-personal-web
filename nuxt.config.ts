// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-16",
			viewport: "width=500, initial-scale=1",
			title:
				"Enrico Feraldo Kalengkongang - UI/UX Design | Fullstack Web Developer",
			meta: [
				// <meta name="description" content="My amazing site">
				{
					name: "description",
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
