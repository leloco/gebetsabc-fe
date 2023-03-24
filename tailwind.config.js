/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "mint-green": "#E0ECE4",
        "light-beige": "#F9F5EB",
        "dark-beige": "#E4DCCF",
        "decent-gray": "#D8D3CD",
        "solid-gray": "#797A7E"
      },
      boxShadow: {
        unhovered: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;",
        hovered: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 }
        }
      },
      animation: {
        "fade-in": "fadeIn 0.8s linear"
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        courgette: ["Courgette", "cursive"],
        fasthand: ["Fasthand", "cursive"],
        federo: ["Federo", "sans-serif"],
        gloock: ["Gloock", "serif"],
        "hind vadodara": ["Hind Vadodara", "sans-serif"],
        "inter-tight": ["Inter Tight", "sans-serif"],
        "noto-serif-jp": ["Noto Serif JP", "serif"],
        pacifico: ["Pacifico", "cursive"],
        "permanent-marker": ["Permanent Marker", "cursive"],
        "poiret-one": ["Poiret One", "cursive"],
        "pt-sans": ["PT Sans", "sans-serif"],
        "pt-sans-narrow": ["PT Sans Narrow", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "rock-salt": ["Rock Salt", "cursive"],
        "shantell-sans": ["Shantell Sans", "cursive"],
        sono: ["Sono", "sans-serif"],
        thasadith: ["Thasadith", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    }
  },
  plugins: []
}
