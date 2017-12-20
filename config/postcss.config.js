const variables = {
  // colors
  'white': '#FFFFFF',
  'gray1': '#F9F9F9',
  'gray2': '#E9E9E9',
  'gray3': '#B2B2B2',
  'gray4': '#6B6B6B',
  'black': '#2F2F2F',
  'error': '#F2416A',
  'alert': '#F5C650',
  'success': '#51D6B4',
  'primary': '#9C47D1',
  'secondary': '#623E79',
  // type
  'font': 'system-ui, sans-serif',
  'lh': '1.5',
  'lhHeader': '1.25',
  'small': '75%',
  'large': '125%',
  // line weights
  'line1': '.063rem',
  'line2': '.125rem',
  'line3': '.188rem',
  'line4': '.250rem',
  // sizing scale
  'ms1': '.5rem',
  'ms2': '.875rem',
  'ms3': '1rem',
  'ms4': '1.5rem',
  'ms5': '2.25rem',
  'ms6': '3rem',
  // widths
  'xs': '30rem',
  'sm': '48rem',
  'md': '62rem',
  'lg': '75rem',
  'xl': '100rem'
}

const customProperties = { variables }

const applyRule = {
  'sets': {
    'header': {
      fontWeight: 'bold',
      lineHeight: variables.lh,
      margin: `0 0 ${variables.ms1}`
    },
    'code': {
      backgroundColor: variables.gray2,
      borderRadius: variables.line2,
      color: variables.black
    }
  }
}

const customSelectors = {
  'extensions': {
    ':--enter': ':hover, :focus',
    ':--button': 'button, [type=submit], [type=reset], [type=button]',
    ':--fields': 'input[type=text], input[type=email], input[type=password], input[type=search], input[type=number], input[type=tel], input[type=date], select, textarea'
  }
}

const customMedia = {
  'extensions': {
    '--xs': '(min-width: 30rem)',
    '--sm': '(min-width: 48rem)',
    '--md': '(min-width: 62rem)',
    '--lg': '(min-width: 75rem)',
    '--xl': '(min-width: 100rem)'
  }
}

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      'features': {
        customProperties,
        applyRule,
        customMedia,
        customSelectors,
        rem: false
      }
    }
  }
}
