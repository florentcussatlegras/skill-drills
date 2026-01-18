/** @type {import('tailwindcss').Config} */
export default {
    content: ["./assets/**/*.js", "./assets/**/*.jsx", "./templates/**/*.twig"],
    theme: {
        extend: {},
        colors: {
            light: "#F7F4F2",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
    },
    plugins: [
        require("@tailwindcss/typography"), // Pour le HTML dans les questions/réponses
    ],
};
