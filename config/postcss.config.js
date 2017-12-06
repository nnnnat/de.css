module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-each': {},
    'postcss-simple-vars': {
      'variables': {
        'white': '#FFFFFF',
        'gray0': '#F9F9F9',
        'gray1': '#E9E9E9',
        'gray2': '#B2B2B2',
        'gray3': '#6B6B6B',
        'black': '#2F2F2F',
        'error': '#F2416A',
        'alert': '#F5C650',
        'success': '#51D6B4',
        'primary': '#9C47D1',
        'secondary': '#623E79',
        'font': 'system-ui, sans-serif',
        'leading': '1.5',
        'leadingTitle': '1.25',
        'line0': '.063rem',
        'line1': '.125rem',
        'line2': '.188rem',
        'line3': '.250rem',
        'ms': '.5rem',
        'ms0': '.5rem',
        'ms1': '.875rem',
        'ms2': '1rem',
        'ms3': '1.25rem',
        'ms4': '1.5rem',
        'ms5': '2.25rem',
        'ms6': '3rem',
        'xs': '30rem',
        'sm': '48rem',
        'md': '62rem',
        'lg': '75rem',
        'xl': '100rem'
      }
    },
    'postcss-nested': {},
    'postcss-custom-media': {
      'extensions': {
        '--xs': '(min-width: 30rem)',
        '--sm': '(min-width: 48rem)',
        '--md': '(min-width: 62rem)',
        '--lg': '(min-width: 75rem)',
        '--xl': '(min-width: 100rem)'
      }
    },
    'postcss-custom-selectors': {
      'extensions': {
        ':--enter': ':hover, :focus',
        ':--txInput': 'input[type=text], input[type=email], input[type=password], input[type=search], input[type=number], input[type=tel], input[type=date]'
      }
    },
    'postcss-font-family-system-ui': {},
    'postcss-color-function': {},
    'autoprefixer': {}
  }
}
