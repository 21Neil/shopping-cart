import { useState } from 'react';
import styles from './Card.module.css';
import { Minus, Plus } from 'lucide-react';
import Button from '../Button/Button';

const Card = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(1)

  const handleClick = () => {
    setVisible(true);
  };

  const quantityChange = e => {
    if (e.target.value.length > 3) return;
    setValue(e.target.value)
  }

  const minusClick = () => {
    if (+value === 1) return;
    setValue(+value - 1)
  }

  const plusClick = () => {
    if (+value === 999) return;
    setValue(+value + 1)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.card__imgContainer}>
        <img
          src='https://cdn.pixabay.com/photo/2018/03/08/18/13/chair-3209341_960_720.jpg'
          alt=''
        />
        <div className={styles.addToCart + ' ' + (visible && styles.visible)}>
          <div className={styles.card__quantityContainer}>
            <button onClick={minusClick}>
              <Minus color='white' size={48} strokeWidth={1} />
            </button>
            <input
              type='number'
              className={styles.quantityInput}
              max={99}
              min={1}
              value={value}
              onChange={quantityChange}
            />
            <button onClick={plusClick}>
              <Plus color='white' size={48} strokeWidth={1} />
            </button>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__contentTittle}>test</h3>
        <p className={styles.card__contentPrice}>$ 100</p>
      </div>
    </div>
  );
};

export default Card;
