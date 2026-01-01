// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         floatSlow: "float 18s ease-in-out infinite",
//         floatReverse: "floatReverse 22s ease-in-out infinite",
//         pulseSlow: "pulse 12s ease-in-out infinite",
//         gradient: "gradient 6s ease infinite",
//       },
//       keyframes: {
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-40px)" },
//         },
//         floatReverse: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(40px)" },
//         },
//         gradient: {
//           "0%, 100%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//         },
//       },
//     },
//   },
//   safelist: [
//     "text-blue-600",
//     "text-blue-700",
//     "text-green-600",
//     "text-orange-500",
//     "text-orange-600",
//     "text-cyan-400",
//     "text-cyan-500",
//     "text-purple-500",
//     "text-purple-600",
//     "text-yellow-400",
//     "text-sky-400",
//     "text-sky-500",
//     "text-pink-500",
//     "text-gray-700",
//   ],

//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}