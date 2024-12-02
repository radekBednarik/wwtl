/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts}"],
	theme: {
		extend: {
			screens: {
				xsm: "425px",
				"2xsm": "375px",
				"3xsm": "320px",
			},
			boxShadow: {
				"gold-glow": "0 0 20px 10px gold",
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ["hover"],
		},
	},
	plugins: [],
};
