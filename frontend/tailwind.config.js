/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais da VUK - Paleta arrojada e moderna
        vuk: {
          // Roxo vibrante - Cor principal da marca
          primary: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',  // Cor principal
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
          },
          // Laranja elétrico - Cor de destaque/ação
          accent: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',  // Cor de destaque
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
          },
          // Azul ciano - Cor complementar
          secondary: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',  // Cor secundária
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            950: '#083344',
          },
          // Rosa vibrante - Cor de destaque alternativa
          pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',  // Rosa vibrante
            600: '#db2777',
            700: '#be185d',
            800: '#9f1239',
            900: '#831843',
            950: '#500724',
          },
          // Neutros escuros - Para backgrounds e textos
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',  // Background escuro principal
            950: '#020617',
          },
        },
      },
      fontFamily: {
        // Fontes modernas e arrojadas
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        // Gradientes personalizados para a VUK
        'gradient-vuk': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-vuk-alt': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        'gradient-vuk-accent': 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      },
      boxShadow: {
        'vuk-glow': '0 0 40px rgba(139, 92, 246, 0.4)',
        'vuk-glow-accent': '0 0 40px rgba(249, 115, 22, 0.4)',
        'vuk-card': '0 10px 40px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
