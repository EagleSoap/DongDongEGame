// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	ssr: true,
	modules: ["@nuxt/icon", "nuxt-swiper"],
	app: {
		// SEO 配置 https://nuxt.com.cn/docs/getting-started/seo-meta
		head: {
			title: "东东电竞",
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "keywords", content: "电竞,电竞陪玩,游戏,游戏陪玩,交友,Game,Gamer,Personals" },
				{ name: "description", content: "东东电竞，致力于为玩家提供最好的游戏体验" },
			],
			link: [{ rel: "icon", type: "image/png", href: "/image/icon.png" }],
		},
	},
	css: ["~/assets/css/default.css", "~/assets/scss/default.scss", "aos/dist/aos.css"],
});
