import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('Card component', () => {
  it('show add to cart', async () => {
    const user = userEvent.setup();

    render(<Card />);
    const card = screen.getByTestId('card');

    expect(screen.queryByTestId('add-to-cart')).toBeNull();

    await user.click(card);

    expect(screen.queryByTestId('add-to-cart')).toBeInTheDocument();
  });

  it('close add to cart', async () => {
    const user = userEvent.setup();

    render(<Card />);
    const card = screen.getByTestId('card');

    await user.click(card);
    const closeBtn = screen.getByRole('button', { name: 'close-btn' });

    await user.click(closeBtn);
    expect(screen.queryByTestId('add-to-card')).toBeNull();

    await user.click(card);
    const addToCartBtn = screen.getByRole('button', { name: 'Add to cart' });

    await user.click(addToCartBtn);
    expect(screen.queryByTestId('add-to-card')).toBeNull();
  });

  it('plus', async () => {
    const user = userEvent.setup();

    render(<Card />);
    const card = screen.getByTestId('card');

    await user.click(card);
    const plusBtn = screen.getByRole('button', {name: 'plus-btn'})
    const quantityInput = screen.getByRole('spinbutton', {name: 'quantity'})

    await user.click(plusBtn)
    expect(quantityInput.value).toBe('2')

    await user.type(quantityInput, '{backspace}99')
    await user.click(plusBtn)

    expect(quantityInput.value).toBe('99')
  });

  it('minus', async () => {
    const user = userEvent.setup();

    render(<Card />);
    const card = screen.getByTestId('card');

    await user.click(card);
    const minusBtn = screen.getByRole('button', {name: 'minus-btn'})
    const quantityInput = screen.getByRole('spinbutton', {name: 'quantity'})

    await user.click(minusBtn)
    expect(quantityInput.value).toBe('1')
    
    await user.type(quantityInput, '{backspace}2')
    await user.click(minusBtn)

    expect(quantityInput.value).toBe('1')
  });

  it('input', async () => {
    const user = userEvent.setup();

    render(<Card />);
    const card = screen.getByTestId('card');

    await user.click(card);
    const quantityInput = screen.getByRole('spinbutton', {name: 'quantity'})

    await user.type(quantityInput, '99')
    
    expect(quantityInput.value).toBe('19')
  })
});
