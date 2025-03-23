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
  it.todo('dovrebbe ricalcolare il valore di USD');
});

describe('quando chiamiamo "updateUsd metodo"', () => {
  it.todo('dovrebbe aggiornare il valore di USD');
  it.todo('dovrebbe ricalcolare il valore di RUB');
});

describe('quando rendiamo di nuovo', () => {
  it.todo('dovrebbe aggiornare il valore');
});
