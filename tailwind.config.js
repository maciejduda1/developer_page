/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-phone": "url('~/images/nexus5.svg')",
				"hero-pc": "url('~/images/monitor.svg')",
				"country-eng": "url('~/images/united-kingdom.png')",
				"country-pol": "url('~/images/poland.png')",
			},
		},
	},
	plugins: [],
};
