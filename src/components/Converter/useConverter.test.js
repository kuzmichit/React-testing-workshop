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
    // Usiamo renderHook per testare un hook personalizzato
    // Passiamo una funzione che chiama `useConverter` con due parametri: `value` e `rate`
    // Inizialmente, il valore è 10 e il tasso di cambio è 50
    const { result, rerender } = renderHook(
      ({ value, rate }) => useConverter(value, rate),
      { initialProps: { value: 10, rate: 50 } }, // Props iniziali per il primo rendering
    );

    // Simuliamo un nuovo rendering con le stesse props
    rerender({ value: 10, rate: 50 });

    // Estraiamo i valori aggiornati restituiti dall'hook dopo il rerender
    const { rub, usd } = result.current;

    // Aspettative sui valori aggiornati:
    // Il valore in rubli (`rub`) dovrebbe rimanere invariato a 10
    expect(rub).toBe(10);

    // Il valore in dollari (`usd`) dovrebbe essere calcolato come 10 / 50 = 0.2
    expect(usd).toBe(0.2);
  });
});
