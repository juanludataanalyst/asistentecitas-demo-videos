/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class", "class"],
    theme: {
    	extend: {
    		colors: {
    			brand: {
    				purple: '#5A2D82',
    				'purple-dark': '#4A246B',
    				'purple-light': '#7C3AED',
    				'purple-very-light': '#A78BFA'
    			},
    			primary: {
    				DEFAULT: 'var(--primary)',
    				foreground: 'var(--primary-foreground)'
    			},
    			'primary-dark': '#4A246B',
    			'primary-light': '#7C3AED',
    			'primary-very-light': '#A78BFA',
    			accent: {
    				DEFAULT: 'var(--accent)',
    				foreground: 'var(--accent-foreground)'
    			},
    			'background-light': '#FAFAFA',
    			'background-dark': '#0A0A0A',
    			'surface-light': '#FFFFFF',
    			'surface-dark': '#141414',
    			'text-primary': '#FFFFFF',
    			'text-secondary': '#A1A1AA',
    			'text-light': '#71717A',
    			'text-dark': '#171717',
    			'border-light': '#E5E5E5',
    			'border-dark': '#262626',
    			background: 'var(--background)',
    			foreground: 'var(--foreground)',
    			card: {
    				DEFAULT: 'var(--card)',
    				foreground: 'var(--card-foreground)'
    			},
    			popover: {
    				DEFAULT: 'var(--popover)',
    				foreground: 'var(--popover-foreground)'
    			},
    			secondary: {
    				DEFAULT: 'var(--secondary)',
    				foreground: 'var(--secondary-foreground)'
    			},
    			muted: {
    				DEFAULT: 'var(--muted)',
    				foreground: 'var(--muted-foreground)'
    			},
    			destructive: {
    				DEFAULT: 'var(--destructive)',
    				foreground: 'var(--destructive-foreground)'
    			},
    			border: 'var(--border)',
    			input: 'var(--input)',
    			ring: 'var(--ring)',
    			chart: {
    				'1': 'var(--chart-1)',
    				'2': 'var(--chart-2)',
    				'3': 'var(--chart-3)',
    				'4': 'var(--chart-4)',
    				'5': 'var(--chart-5)'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		boxShadow: {
    			'2xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    			'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    			sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    			elevationSm: '0 1px 3px rgb(0 0 0 / 0.08)',
    			elevationMd: '0 4px 12px rgb(0 0 0 / 0.10)',
    			elevationLg: '0 12px 24px rgb(0 0 0 / 0.12)',
    			elevationXl: '0 20px 40px rgb(0 0 0 / 0.15)',
    			primarySm: '0 2px 8px rgb(90 45 130 / 0.15)',
    			primaryMd: '0 4px 16px rgb(90 45 130 / 0.20)',
    			primaryLg: '0 8px 24px rgb(90 45 130 / 0.25)',
    			glowPurple: '0 0 20px rgb(90 45 130 / 0.30)'
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'sans-serif'
    			],
    			display: [
    				'Sora',
    				'sans-serif'
    			],
    			body: [
    				'Inter',
    				'sans-serif'
    			]
    		},
    		borderRadius: {
    			DEFAULT: '0.5rem',
    			lg: 'var(--radius)',
    			xl: '1rem',
    			'2xl': '1.25rem',
    			'3xl': '1.5rem',
    			full: '9999px',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
    			'elevation-sm': '0 1px 3px rgb(0 0 0 / 0.08)',
    			'elevation-md': '0 4px 12px rgb(0 0 0 / 0.10)',
    			'elevation-lg': '0 12px 24px rgb(0 0 0 / 0.12)',
    			'elevation-xl': '0 20px 40px rgb(0 0 0 / 0.15)',
    			'primary-sm': '0 2px 8px rgb(90 45 130 / 0.15)',
    			'primary-md': '0 4px 16px rgb(90 45 130 / 0.20)',
    			'primary-lg': '0 8px 24px rgb(90 45 130 / 0.25)',
    			'glow-purple': '0 0 20px rgb(90 45 130 / 0.30)'
    		},
    		spacing: {
    			'18': '4.5rem',
    			'22': '5.5rem'
    		}
    	}
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("tailwindcss-animate")
    ],
}
