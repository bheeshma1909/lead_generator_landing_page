export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Core color tokens
        base: {
          100: '#0B0D12',
          200: '#131A24', 
          300: '#1E2533'
        },
        text: {
          light: '#E6EAF4'
        },
        accent: {
          teal: '#00E0FF',
          electric: '#0AD5FF'
        },
        cta: {
          orange: '#FF8A00',
          gold: '#FFC938'
        }
      },
      fontFamily: {
        primary: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SF Mono', 'Consolas', 'monospace']
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem', 
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem'
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.4', 
        relaxed: '1.6'
      },
      borderRadius: {
        'button': '8px',
        'card': '12px'
      },
      boxShadow: {
        'button-primary': '0 0 8px rgba(255,138,0,0.4)',
        'card': '0 4px 12px rgba(0,0,0,0.30)'
      },
      maxWidth: {
        'container': '1200px'
      },
      spacing: {
        'gutter': '1.5rem',
        'section': '4rem'
      }
    }
  }
}