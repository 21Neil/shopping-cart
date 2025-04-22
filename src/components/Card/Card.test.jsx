import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Card from './Card';

const item = {
  title: 'Mens Cotton Jacket',
  price: 55.99,
  image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
};

describe('Card component', () => {
  it('show add to cart', async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();

    render(<Card {...{ item, addToCart }} />);

    const card = screen.getByTestId('card');
    
    expect(screen.queryByTestId('add-to-cart')).toBeNull();

    await user.click(card);

    expect(screen.queryByTestId('add-to-cart')).toBeInTheDocument();
  });

  it('close add to cart', async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();

    render(<Card {...{ item, addToCart }} />);

    const card = screen.getByTestId('card');
    await user.click(card);

    const closeBtn = screen.getByRole('button', { name: 'close-btn' });
    await user.click(closeBtn);

    const addToCartEle = screen.getByTestId('add-to-cart')
    addToCartEle.dispatchEvent(new Event('animationend'))

    await waitFor(() => expect(addToCartEle).not.toBeInTheDocument());

    await user.click(card);

    const addToCartBtn = screen.getByRole('button', { name: 'Add to cart' });
    const addToCartEle2 = screen.getByTestId('add-to-cart')
    await user.click(addToCartBtn);

    addToCartEle2.dispatchEvent(new Event('animationend'))
    await waitFor(() => expect(addToCartEle2).not.toBeInTheDocument());
  });

  it('plus, minus, and input', async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();

    render(<Card {...{ item, addToCart }} />);

    const card = screen.getByTestId('card');
    await user.click(card);

    const plusBtn = screen.getByRole('button', { name: '+' });
    const minusBtn = screen.getByRole('button', { name: '-' });
    const quantityInput = screen.getByRole('spinbutton', { name: 'quantity' });
    await user.click(plusBtn);
    expect(quantityInput.value).toBe('2');

    await user.type(quantityInput, '{backspace}99');
    await user.click(plusBtn);
    expect(quantityInput.value).toBe('99');

    await user.type(quantityInput, '{backspace}{backspace}1')
    await user.click(minusBtn)
    expect(quantityInput.value).toBe('1')

    await user.type(quantityInput, '{backspace}2');
    await user.click(minusBtn);
    expect(quantityInput.value).toBe('1');

    await user.type(quantityInput, '99');
    expect(quantityInput.value).toBe('19');

    await user.type(quantityInput, '{backspace}{backspace}')
    expect(quantityInput.value).toBe('');

    await user.type(quantityInput, '{backspace}{backspace}-1')
    expect(quantityInput.value).toBe('1');

  });

  it('call addToCart with correct quantity', async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();

    render(<Card {...{ item, addToCart }} />);
    const card = screen.getByTestId('card');
    await user.click(card);
    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByRole('button', { name: 'Add to cart' }));
    expect(addToCart).toHaveBeenCalledWith({ ...item, quantity: 3 });
    screen.getByTestId('add-to-cart').dispatchEvent(new Event('animationend'))

    await user.click(card)
    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByRole('button', { name: 'Add to cart' }));
    expect(addToCart).toHaveBeenCalledWith({ ...item, quantity: 2 });
  });
});
