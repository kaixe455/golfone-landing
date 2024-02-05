/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				golfgreen: '#008953',
				golfgreendark: '#006b3f',
				golfgreenlight: '#00a65a',
			},
			fontFamily: {
				'golfone': ['GolfOne', 'sans-serif'],
			},
		},
		backgroundImage: {
			'golfone-gradient': 'linear-gradient(40deg, rgba(255,255,255,1) 66%, rgba(0,137,83,1) 100%)',
			'golfone-gradient-invert': 'linear-gradient(150deg, rgba(0,137,83,1) 5%, rgba(255,255,255,1) 57%)',
		}
	},
	safelist: [
		'golfone-gradient',
		'golfone-gradient-invert'
	],
	plugins: [],
}
