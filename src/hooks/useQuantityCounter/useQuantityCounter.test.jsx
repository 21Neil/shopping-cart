import { describe, expect, it } from 'vitest';
import useQuantityCounter from './useQuantityCounter';
import { act, renderHook } from '@testing-library/react';

describe('useQuantityCounter', () => {
  it('plus, minus, and input', async () => {
    const { result } = renderHook(() => useQuantityCounter(1));

    act(result.current.plusClick);
    expect(result.current.quantity).toBe(2);

    act(() => result.current.quantityChange({target: {value: '99'}}));
    act(result.current.plusClick);
    expect(result.current.quantity).toBe(99);

    act(() => result.current.quantityChange({target: {value: '1'}}));
    act(result.current.minusClick);
    expect(result.current.quantity).toBe(1);

    act(() => result.current.quantityChange({target: {value: '2'}}));
    act(result.current.minusClick);
    expect(result.current.quantity).toBe(1);

    act(() => result.current.quantityChange({target: {value: ''}}));
    expect(result.current.quantity).toBe(1);

    act(() => result.current.quantityChange({target: {value: '-1'}}));
    expect(result.current.quantity).toBe(1);
  });
});
