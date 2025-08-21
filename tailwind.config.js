
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(240 5% 8%)',
        text: 'hsl(0 0% 95%)',
        muted: 'hsl(0 0% 70%)',
        accent: 'hsl(280 70% 60%)',
        primary: 'hsl(265 80% 55%)',
        surface: 'hsl(240 5% 12%)',
        success: 'hsl(142 76% 36%)',
        warning: 'hsl(38 92% 50%)',
        error: 'hsl(0 84% 60%)',
        purple: {
          500: 'hsl(280 70% 60%)',
          600: 'hsl(280 70% 50%)',
          700: 'hsl(280 70% 40%)'
        },
        gray: {
          800: 'hsl(240 5% 15%)',
          900: 'hsl(240 5% 10%)'
        }
      },
      spacing: {
        xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px', '2xl': '32px'
      },
      borderRadius: {
        sm: '6px', md: '10px', lg: '14px', xl: '18px'
      },
      boxShadow: {
        card: '0 4px 20px hsla(0, 0%, 0%, 0.15)',
        glow: '0 0 30px hsla(280, 70%, 60%, 0.2)',
        'glow-lg': '0 0 50px hsla(280, 70%, 60%, 0.3)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
