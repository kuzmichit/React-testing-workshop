import { act, renderHook } from '@testing-library/react';
import { useConverter } from './useConverter';

const rate = 42;
const testRubAmount = 100;
const calculatedUsdAmount = 2.38;
describe('when rendered', () => {
  it('input should contain an expected rub amount', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, rate));
    expect(result.current.rub).toEqual(testRubAmount);
  });
  it('input should contain an expected usd amount', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, rate));
    expect(result.current.usd).toBe(calculatedUsdAmount);
  });
});

describe('quando chiamiamo il metodo "updateRub"', () => {
  it('dovrebbe aggiornare il valore di RUB', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, rate));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.rub).toBe(10);
  });
  it('dovrebbe ricalcolare il valore di USD', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, rate));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.usd).toBe(0.24);
  });
});

describe('quando chiamiamo "updateUsd metodo"', () => {
  it('dovrebbe aggiornare il valore di USD', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, rate));

    act(() => {
      result.current.updateUsd(10);
    });
    expect(result.current.usd).toBe(10);
  });
  it('dovrebbe ricalcolare il valore di RUB', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, rate));

    act(() => {
      result.current.updateUsd(10);
    });
    expect(result.current.rub).toBe(420);
  });
});

describe('quando rendiamo di nuovo', () => {
  it('dovrebbe aggiornare il valore', () => {
    const { result, rerender } = renderHook(
      ({ value, rate }) => useConverter(value, rate),
      { initialProps: { value: 10, rate: 50 } },
    );
    rerender({ value: 10, rate: 50 });
    const { rub, usd } = result.current;
    expect(rub).toBe(10);
    expect(usd).toBe(0.2);
  });
});
