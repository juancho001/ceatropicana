module.exports = {
  content: [
    './src/**/*.{html,ts,css,scss}',
  ],
  theme: {
    colors: {
      // Colores personalizados
      'brand-white': '#FEFEFE',
      'brand-dark-blue': '#002F68',
      'brand-accent': '#ED3237',
      'brand-black': '#000000',
      'brand-light-gray': '#F1F1F2',
      // Colores base
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent',
    },
    extend: {
      colors: {
        // Colores mapeados para utilidad
        'primary': '#002F68',
        'accent': '#ED3237',
        'neutral-bg': '#F1F1F2',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#002F68',
          'secondary': '#ED3237',
          'accent': '#ED3237',
          'neutral': '#F1F1F2',
          'base-100': '#FEFEFE',
          'base-200': '#F1F1F2',
          'base-300': '#E5E5E5',
          'info': '#002F68',
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#ED3237',
        },
      },
    ],
  },
}
