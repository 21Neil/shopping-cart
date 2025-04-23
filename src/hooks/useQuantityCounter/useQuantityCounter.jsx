import { useState } from 'react';

const useQuantityCounter = number => {
  const [quantity, setQuantity] = useState(number);

  const quantityChange = e => {
    if (e.target.value.length > 2) return;
    if (+e.target.value <= 0) return setQuantity(1);
    setQuantity(+e.target.value);
  };

  const minusClick = () => {
    if (+quantity <= 1) return;
    setQuantity(+quantity - 1);
  };

  const plusClick = () => {
    if (+quantity === 99) return;
    setQuantity(+quantity + 1);
  };

  return { quantity, quantityChange, minusClick, plusClick };
};

export default useQuantityCounter;
