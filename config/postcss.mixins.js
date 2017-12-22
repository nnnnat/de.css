const variables = require('./postcss.variables.js')

// themes
const themes = {
  // header style
  __header: {
    fontWeight: 'bold',
    lineHeight: variables.lh,
    margin: `0 0 ${variables.ms1}`
  },
  // code & pre style
  __code: {
    backgroundColor: variables.gray2,
    borderRadius: variables.line2,
    color: variables.black
  }
}

// modifiers
const modifiers = {
  // media query modifier
  mqs: () => {
    const mqs = ['xs', 'sm', 'md', 'lg', 'xl']
    let style = {}
    style['@media (--xs)'] = { '@mixin-content': {} }
    mqs.map(mq => {
      let mod = {}
      mod[`&--${mq}`] = { '@mixin-content': {} }
      style[`@media (--${mq})`] = { ...mod }
    })
    return style
  },
  // modular scale modifier
  scl: (mixin, prop, mqs, prop2) => {
    let slctr = {}
    let style = {}
    for (let i = 0; i <= 6; i++) {
      style[`${prop}`] = (i === 0) ? 0 : `$ms${i}`
      if (prop2) style[`${prop2}`] = (i === 0) ? 0 : `$ms${i}`
      mqs === 'mqs' ? slctr[`&${i}`] = { '@mixin mqs': { ...style } } : slctr[`&${i}`] = { ...style }
    }
    return slctr
  },
  // x and y scale modifier
  xY: (mixin, prop, mqs = false) => {
    const sides = ['x', 'y']
    let slctr = {}
    sides.map(side => {
      let x = (side === 'x')
      let style = {}
      style[`@mixin scl ${prop}-${x ? 'left' : 'bottom'}, ${mqs}, ${prop}-${x ? 'right' : 'top'}`] = {}
      slctr[`&${side}`] = { ...style }
    })
    return slctr
  },
  // left right top and bottom scale modifier
  lrtb: (mixin, prop, mqs) => {
    const sides = ['left', 'right', 'top', 'bottom']
    let slctr = {}
    sides.map(side => {
      let style = {}
      style[`@mixin scl ${prop}-${side}, ${mqs}`] = {}
      slctr[`&${side.charAt(0)}`] = { ...style }
    })
    return slctr
  },
  // apply all scale mixins
  fllScl: (mixin, prop, mqs) => {
    let slctr = {}
    let styles = {}
    styles[`@mixin scl ${prop}, ${mqs}`] = {}
    styles[`@mixin lrtb ${prop}, ${mqs}`] = {}
    styles[`@mixin xY ${prop}, ${mqs}`] = {}
    slctr = { ...styles }
    return slctr
  },
  // apply full scale modifier with out
  // and with media query modifiers
  scale: (mixin, prop) => {
    let slctr = {}
    let styles = {}
    styles[`@mixin fllScl ${prop}`] = {}
    styles[`@mixin fllScl ${prop}, mqs`] = {}
    slctr = { ...styles }
    return slctr
  },
  // color modifier
  colors: (mixin, prop) => {
    const clrs = [
      ['black', variables.black],
      ['white', variables.white],
      ['gray1', variables.gray1],
      ['grey1', variables.gray1],
      ['gray2', variables.gray2],
      ['grey2', variables.gray2],
      ['gray3', variables.gray3],
      ['grey3', variables.gray3],
      ['gray4', variables.gray4],
      ['grey4', variables.gray4],
      ['primary', variables.primary],
      ['secondary', variables.secondary],
      ['success', variables.success],
      ['alert', variables.alert],
      ['error', variables.error]
    ]
    let slctr = {}
    let style = {}
    
    clrs.map(clr => {
      style[`${prop}`] = clr[1]
      slctr[`&--${clr[0]}`] = { ...style }
    })

    return slctr
  }
}

module.exports = { ...themes, ...modifiers }
