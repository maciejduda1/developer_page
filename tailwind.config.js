/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				lora: ["Lora", "serif"],
				caveat: ["Caveat", "cursive"],
			},
			colors: {
				primary: "#070F2B",
				secondary: "#1B1A55",
				accent: "#535C91",
			},
			backgroundImage: {
				jumbotron: "url('~/images/jumbo2.jpg')",
				"hero-phone": "url('~/images/nexus5.svg')",
				"hero-pc": "url('~/images/monitor.svg')",
				"country-eng": "url('~/images/united-kingdom-flag.svg')",
				"country-pol": "url('~/images/poland-flag.svg')",
			},
		},
	},
	plugins: [],
};
