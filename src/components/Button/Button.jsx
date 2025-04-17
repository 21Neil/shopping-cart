import styles from './Button.module.css'

const Button = ({color = 'green', children, onClick }) => {
  return (
    <button className={styles.btn + ' ' + styles[color]} onClick={onClick}>{children}</button>
  )
}

export default Button