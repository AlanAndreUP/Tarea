/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          xs: "330px",
        },
      },
    },
    plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
  };
  