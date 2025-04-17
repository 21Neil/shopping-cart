import React from 'react';
import styles from './QuantityCounter.module.css';

const QuantityCounter = () => {
  return (
    <div className={styles.quantityCounter__container}>
      <button className={styles.quantityCounter__btn}>
        -
      </button>
      <input className={styles.quantityCounter__input} type='number' />
      <button className={styles.quantityCounter__btn}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
