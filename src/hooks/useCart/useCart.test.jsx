import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useCart from './useCart';

describe('use cart hook', () => {
  it('add to cart', () => {
    const { result } = renderHook(useCart);

    act(() =>
      result.current.addToCart({
        id: '1',
        name: 'Apple',
        price: 100,
        quantity: 2,
      })
    );

    expect(result.current.getItem()).toEqual([
      {
        id: '1',
        name: 'Apple',
        price: 100,
        quantity: 2,
      },
    ]);
  });

  it('update quantity', () => {
    const { result } = renderHook(useCart);

    act(() =>
      result.current.addToCart({
        id: '1',
        name: 'Apple',
        price: 100,
        quantity: 2,
      })
    );

    act(() => result.current.updateQuantity('1', 3));

    expect(result.current.getItem()).toEqual([
      {
        id: '1',
        name: 'Apple',
        price: 100,
        quantity: 3,
      },
    ]);
  });

  it('remove from cart', () => {
    const { result } = renderHook(useCart);

    act(() =>
      result.current.addToCart({
        id: '1',
        name: 'Apple',
        price: 100,
        quantity: 2,
      })
    );

    act(() => result.current.removeFromCart('1'))
    
    expect(result.current.getItem().length).toBe(0)
  })

  it('get total', () => {
    const { result } = renderHook(useCart);

    act(() => {
      result.current.addToCart({
        id: '1',
        name: 'Apple',
        price: 100,
        quantity: 2,
      })
    })

    act(() => {
      result.current.addToCart({
        id: '2',
        name: 'Banana',
        price: 50,
        quantity: 2,
      })
    })

    act(() => {
      result.current.addToCart({
        id: '3',
        name: 'Pineapple',
        price: 200,
        quantity: 1,
      })
    })

    expect(result.current.getTotal()).toBe(500)
  })
});
