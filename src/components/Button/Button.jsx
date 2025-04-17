import styles from './Button.module.css';

const Button = ({ color = 'green', children, onClick, className }) => {
  return (
    <button
      className={styles.btn + ' ' + styles[color] + ' ' + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
