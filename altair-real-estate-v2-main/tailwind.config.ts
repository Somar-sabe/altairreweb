/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-100': 'var(--theme-default)',
                'brand-200': '#717171',
                'brand-300': 'var(--theme-default2)',
            },
            keyframes: {
                rotate: {
                    '0%, 100%': {
                        transform: 'rotateY(0deg)',
                    },
                    '50%': {
                        transform: 'rotateY(180deg)',
                    },
                },
            },
            animation: {
                rotate: 'rotate 6s ease-in-out infinite',
                grow: 'grow 4s ease-in-out 1',
                shrink: 'shrink 4s ease-in-out 1',
            },
            screens: {
                'custom-lg': '1200px',
                'custom-nav': '1310px',
            },
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: [],
}
