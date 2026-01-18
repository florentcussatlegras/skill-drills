/** @type {import('tailwindcss').Config} */
export default {
    content: ["./assets/**/*.js", "./assets/**/*.jsx", "./templates/**/*.twig"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"), // Pour le HTML dans les questions/réponses
    ],
};
