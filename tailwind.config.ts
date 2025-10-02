// import type { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";

// const config: Config = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       // Fontes personalizadas
//       fontFamily: {
//         sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
//         montserrat: ["Montserrat"],
//       },

//       // Cores personalizadas para o tema do escritório
//       colors: {
//         // Cores primárias para advocacia (tons de azul e dourado)
//         primary: {
//           50: "#eff6ff",
//           100: "#dbeafe",
//           200: "#bfdbfe",
//           300: "#93c5fd",
//           400: "#60a5fa",
//           500: "#3b82f6",
//           600: "#2563eb",
//           700: "#1d4ed8",
//           800: "#1e40af",
//           900: "#1e3a8a",
//           950: "#172554",
//         },
//         gold: {
//           50: "#fffbeb",
//           100: "#fef3c7",
//           200: "#fde68a",
//           300: "#fcd34d",
//           400: "#fbbf24",
//           500: "#f59e0b",
//           600: "#d97706",
//           700: "#b45309",
//           800: "#92400e",
//           900: "#78350f",
//           950: "#451a03",
//         },
//         // Tons neutros profissionais
//         neutral: {
//           50: "#fafafa",
//           100: "#f5f5f5",
//           200: "#e5e5e5",
//           300: "#d4d4d4",
//           400: "#a3a3a3",
//           500: "#737373",
//           600: "#525252",
//           700: "#404040",
//           800: "#262626",
//           900: "#171717",
//           950: "#0a0a0a",
//         },
//       },

//       // Animações personalizadas
//       animation: {
//         // Animações suaves para landing page
//         "fade-in": "fadeIn 0.6s ease-in-out",
//         "fade-in-up": "fadeInUp 0.8s ease-out",
//         "fade-in-down": "fadeInDown 0.8s ease-out",
//         "slide-in-left": "slideInLeft 0.7s ease-out",
//         "slide-in-right": "slideInRight 0.7s ease-out",
//         "scale-in": "scaleIn 0.5s ease-out",
//         "bounce-soft": "bounceSoft 2s infinite",
//         "pulse-soft": "pulseSoft 2s ease-in-out infinite",
//         float: "float 3s ease-in-out infinite",
//         glow: "glow 2s ease-in-out infinite alternate",

//         // Animações específicas para advocacia
//         typing:
//           "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
//         "reveal-text": "revealText 1.5s ease-out",
//         "underline-expand": "underlineExpand 0.5s ease-out",
//         "card-hover": "cardHover 0.3s ease-out",
//       },

//       // Keyframes para as animações
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         fadeInUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         fadeInDown: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(-30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         slideInLeft: {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(-50px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0)",
//           },
//         },
//         slideInRight: {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(50px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0)",
//           },
//         },
//         scaleIn: {
//           "0%": {
//             opacity: "0",
//             transform: "scale(0.9)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "scale(1)",
//           },
//         },
//         bounceSoft: {
//           "0%, 20%, 50%, 80%, 100%": {
//             transform: "translateY(0)",
//           },
//           "40%": {
//             transform: "translateY(-10px)",
//           },
//           "60%": {
//             transform: "translateY(-5px)",
//           },
//         },
//         pulseSoft: {
//           "0%, 100%": {
//             opacity: "1",
//           },
//           "50%": {
//             opacity: "0.7",
//           },
//         },
//         float: {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//           },
//           "50%": {
//             transform: "translateY(-10px)",
//           },
//         },
//         glow: {
//           "0%": {
//             "box-shadow": "0 0 5px rgba(59, 130, 246, 0.5)",
//           },
//           "100%": {
//             "box-shadow":
//               "0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)",
//           },
//         },
//         typing: {
//           "0%": {
//             width: "0",
//           },
//           "100%": {
//             width: "100%",
//           },
//         },
//         "blink-caret": {
//           "0%, 50%": {
//             "border-color": "transparent",
//           },
//           "51%, 100%": {
//             "border-color": "currentColor",
//           },
//         },
//         revealText: {
//           "0%": {
//             width: "0",
//             opacity: "0",
//           },
//           "50%": {
//             opacity: "1",
//           },
//           "100%": {
//             width: "100%",
//             opacity: "1",
//           },
//         },
//         underlineExpand: {
//           "0%": {
//             width: "0",
//           },
//           "100%": {
//             width: "100%",
//           },
//         },
//         cardHover: {
//           "0%": {
//             transform: "translateY(0) scale(1)",
//             "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//           },
//           "100%": {
//             transform: "translateY(-5px) scale(1.02)",
//             "box-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },

//       // Espaçamentos personalizados
//       spacing: {
//         "18": "4.5rem",
//         "88": "22rem",
//         "128": "32rem",
//         "144": "36rem",
//       },

//       // Tamanhos de fonte específicos
//       fontSize: {
//         xs: ["0.75rem", { lineHeight: "1rem" }],
//         sm: ["0.875rem", { lineHeight: "1.25rem" }],
//         base: ["1rem", { lineHeight: "1.5rem" }],
//         lg: ["1.125rem", { lineHeight: "1.75rem" }],
//         xl: ["1.25rem", { lineHeight: "1.75rem" }],
//         "2xl": ["1.5rem", { lineHeight: "2rem" }],
//         "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
//         "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
//         "5xl": ["3rem", { lineHeight: "1" }],
//         "6xl": ["3.75rem", { lineHeight: "1" }],
//         "7xl": ["4.5rem", { lineHeight: "1" }],
//         "8xl": ["6rem", { lineHeight: "1" }],
//         "9xl": ["8rem", { lineHeight: "1" }],
//         hero: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1" }],
//         display: ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.1" }],
//       },

//       // Box shadows profissionais
//       boxShadow: {
//         soft: "0 2px 15px rgba(0, 0, 0, 0.08)",
//         medium: "0 4px 25px rgba(0, 0, 0, 0.15)",
//         large: "0 10px 40px rgba(0, 0, 0, 0.2)",
//         gold: "0 4px 20px rgba(245, 158, 11, 0.3)",
//         blue: "0 4px 20px rgba(59, 130, 246, 0.3)",
//         "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
//       },

//       // Border radius personalizado
//       borderRadius: {
//         none: "0",
//         sm: "0.125rem",
//         DEFAULT: "0.25rem",
//         md: "0.375rem",
//         lg: "0.5rem",
//         xl: "0.75rem",
//         "2xl": "1rem",
//         "3xl": "1.5rem",
//         full: "9999px",
//       },

//       // Gradients para backgrounds elegantes
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         "gold-gradient": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//         "blue-gradient": "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         professional:
//           "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%)",
//       },

//       // Transições suaves
//       transitionDuration: {
//         "400": "400ms",
//         "600": "600ms",
//         "800": "800ms",
//         "1200": "1200ms",
//       },

//       // Z-index organizados
//       zIndex: {
//         "60": "60",
//         "70": "70",
//         "80": "80",
//         "90": "90",
//         "100": "100",
//       },
//     },
//   },
//   plugins: [
//     // Plugin para utilidades customizadas
//     plugin(({ addUtilities }) => {
//       addUtilities({
//         ".scroll-smooth": {
//           "scroll-behavior": "smooth",
//         },
//         ".hover-gold": {
//           "&:hover": {
//             color: "#f59e0b",
//             transition: "color 0.3s ease",
//           },
//         },
//         ".hover-scale": {
//           "&:hover": {
//             transform: "scale(1.05)",
//             transition: "transform 0.3s ease",
//           },
//         },
//         ".text-gradient": {
//           background: "linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)",
//           "-webkit-background-clip": "text",
//           "-webkit-text-fill-color": "transparent",
//           "background-clip": "text",
//         },
//       });
//     }),
//   ],
// };

// export default config;
