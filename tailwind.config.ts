import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'primaryColor': 'var(--color-primary)',
      'secondaryColor': 'var(--color-secondary)',
      'tertiaryColor': 'var(--color-tertiary)',
      'quaternaryColor': 'var(--color-quaternary)',
    },

    keyframes: {
      rolling: {
        "from": { transform: "rotate(0deg)" },
        "to": { transform: "rotate(360deg)" },
      },

      textEntering: {
        "0%": {
          opacity: "1",
          transform: "translateY(-2em)"
        },
        "16%": {
          opacity: "1",
          transform: "translateY(0) scale(1.3, 0.7)",
        },
        "24%": {
          opacity: "1",
          transform: "translateY(0) scale(1, 1)",
        },
        "80%": {
          opacity: "1",
          transform: "translateY(0)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(2em)",
        }
      },

      fadeout: {
        "0%": {
          opacity: "1"
        },
        "100%": {
          opacity: "0"
        }
      },

      circle: {
        "0%": {
          top: "60px",
          height: "5px",
          borderRadius: "50px 50px 25px 25px",
          transform: "scaleX(1.7)"
        },
        "40%": {
          height: "20px",
          borderRadius: "50%",
          transform: "scaleX(1)"
        },
        "100%": {
          top: "0%"
        }
      },

      shadow: {
        "0%": {
          transform: "scaleX(1.5)"
        },
        "40%": {
          transform: "scaleX(1)",
          opacity: ".7"
        },
        "100%": {
          transform: "scaleX(.2)",
          opacity: ".4"
        }
      },

      jump: {
        "0%": {
          transform: "translateY(0)"
        },
        "25%": {
          transform: "translateY(-10px)"
        },
        "50%": {
          transform: "translateY(0)"
        },
        "75%": {
          transform: "translateY(-10px)"
        },
        "100%": {
          transform: "translateY(0)"
        }
      },

      jumpInterval: {
        "0%": {
          transform: "translateY(0)"
        },
        "85%": {
          transform: "translateY(0)"
        },
        "93%": {
          transform: "translateY(-5px)"
        },
        "100%": {
          transform: "translateY(0)"
        }
      },
    },
  },
  plugins: [],
};
export default config;
