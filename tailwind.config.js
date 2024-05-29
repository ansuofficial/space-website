/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        bellowmd: { max: "767px" },
        bellowlg: { max: "1023px" },
      },
      fontFamily: {
        custom: ["Bellefair"],
        default: ["Reddit Sans Condensed"],
      },
      backgroundImage: {
        homeDesktop: "url('/home/background-home-desktop.jpg')",
        homeMobile: "url('/home/background-home-mobile.jpg')",
        destinationDesktop:
          "url('/destination/background-destination-desktop.jpg')",
        destinationMobile:
          "url('/destination/background-destination-mobile.jpg')",

        crewDesktop: "url('/crew/background-crew-desktop.jpg')",
        crewMobile: "url('/crew/background-crew-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
