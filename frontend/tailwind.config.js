/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./node_modules/flowbite-react/**/*.js",
	"./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			'matrix-grey' : '#010408',
			'matrix-green' : '#63C966',
		},
	},
  },
  plugins: [
	require("flowbite/plugin")
  ],
}
