import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00AD98',
        text_primary: '#555555',
        text_secondary: '#333333',
        text_disabled: '#717171',
      },
    },
  },
  plugins: [],
};
export default config;
