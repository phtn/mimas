module.exports = {
  theme: {
    corePlugins: {
      grayscale: true,
    },
    extend: {
      backgroundImage: {
        ridges: `url(/src/static/assets/ridges.webp)`,
      },
      backgroundOpacity: {
        "opacity-40": "0.4",
      },
      backgroundSize: {
        cover: "cover",
      },
      backgroundPosition: "absolute",
    },
  },
  variants: {
    extend: {
      cursor: ["hover", "focus"],
      textColor: ["hover", "active", "focus"],
    },
  },
};
