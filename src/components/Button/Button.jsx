import React from 'react'
import styles from './Button.module.css'

const Button = ({color = 'green', children}) => {
  return (
    <button className={styles.btn + ' ' + styles[color]}>{children}</button>
  )
}

export default Button