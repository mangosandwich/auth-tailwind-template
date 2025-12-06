/** @type {import('tailwindcss').Config} */
module.exports = {
  // Path ke file-file yang menggunakan kelas Tailwind
  content: [
    "./public/*.{html,js,php}", // Cari di file dalam public/
    "./public/**/*.{html,js,php}", // Cari di subfolder dalam public/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
