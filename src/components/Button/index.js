import React from 'react'
import CSSModules from 'react-css-module'
import styles from './styles.scss'

const Button = ({ children, ...rest }) => (
  <button
    styleName="Button"
    {...rest}
    >
      {children}
    </button>
)

export default CSSModules(Button, styles)