import { rubToUsd, usdToRub } from './converter';
// import { expect } from '@testing-library/react';

describe('when converted rub to usd', () => {
  it('should contain an expected usd amount', () => {
    const result = rubToUsd(10, 50);
    expect(result).toEqual(0.2);
  });
  it('manca un parametro', () => {
    const result = rubToUsd(10);
    expect(result).toEqual(NaN);
  });
  it('un parametro undefined', () => {
    const result = rubToUsd(undefined, 50);
    expect(result).toEqual(NaN);
  });
});

describe('when converted usd to rub', () => {
  it('should contain an expected rub amount', () => {
    const testCases = [
      { usd: 10, rate: 1.5, expected: 15 },
      { usd: 10, rate: 5, expected: 50 },
      { usd: 10, rate: Math.PI, expected: 31.42 },
    ];
    testCases.forEach(({ usd, rate, expected }) => {
      const result = usdToRub(usd, rate);
      expect(result).toEqual(expected);
    });
  });
});
