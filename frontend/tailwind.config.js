// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#EFF6FF",
					100: "#DBEAFE",
					200: "#BFDBFE",
					300: "#93C5FD",
					400: "#60A5FA",
					500: "#3B82F6",
					600: "#2563EB",
					700: "#1D4ED8",
					800: "#1E40AF",
					900: "#172554",
				},

				dark: {
					900: "#050816",
					800: "#0B1120",
					700: "#111827",
					600: "#1E293B",
				},
			},

			boxShadow: {
				glow: "0 0 30px rgba(59,130,246,.25)",
				card: "0 15px 40px rgba(0,0,0,.35)",
			},

			borderRadius: {
				xl2: "1.25rem",
			},

			backgroundImage: {
				"hero-gradient":
					"linear-gradient(135deg,#050816 0%,#0B1120 55%,#172554 100%)",
			},
		},
	},
	plugins: [],
};