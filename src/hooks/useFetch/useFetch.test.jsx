import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useFetch from "./useFetch";

describe('useFetch', () => {
  beforeEach(() => {
    window.global.fetch = vi.fn();
  })

  afterEach(() => {
    vi.clearAllMocks();
  })

  it('return data after successful fetch', () => {
    const { mockData } = { message: 'hello' };

    fetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve(mockData)
    })

    const { result } = renderHook(() => useFetch('https://api.com/test'));

    expect(result.current.loading).toBe(true)
    
    waitFor(() => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null)
    })
  })

  it('return error when fetch fails', () => {
    fetch.mockResolvedValueOnce({
      states: 500,
      json: () => Promise.resolve({})
    });

    const { result } = renderHook(() => useFetch('https://api.com/fail'));

    waitFor(() => {
      expect(result.current.data).toBe(null);
      expect(result.current.error).toEqual(new Error('server error'));
      expect(result.current.loading).toBe(false);
    })
  })

  it('return error when fetch throws', () => {
    fetch.mockRejectedValueOnce(new Error('network error'));

    const { result } = renderHook(() => useFetch('https://api.com/error'));

    waitFor(() => {
      expect(result.current.data).toBe(null);
      expect(result.current.error).toEqual(new Error('network error'));
      expect(result.current.loading).toBe(false);
    })
  })
})