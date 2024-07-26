/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-phone": "url('/src/images/nexus5.svg')",
				"hero-pc": "url('/src/images/monitor.svg')",
			},
		},
	},
	plugins: [],
};
