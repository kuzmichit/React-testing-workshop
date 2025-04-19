import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Converter } from './Converter';

// let rubValue = '100'; // stato finto per simulare useState
// const mockUpdateRub = jest.fn((val) => {
//   rubValue = val;
// });
const mockUpdateRub = jest.fn(() => '42');
const mockUpdateUsd = jest.fn();

jest.mock('./useConverter', () => ({
  useConverter() {
    return {
      rub: 100,
      usd: 2.38,
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    };
  },
}));

describe('when rendered', () => {
  it('rub input should have a value with a rub amount', () => {
    render(<Converter />);
    expect(screen.getByLabelText(/Quantita in RUB/)).toHaveValue(100);
  });

  it('usd input should have a value with a usd amount', () => {
    render(<Converter />);
    expect(screen.getByLabelText(/Quantita in USD/)).toHaveValue(2.38);
  });
});

describe('when typed in a RUB input', () => {
  it('should update its value', () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Quantita in RUB/);

    userEvent.clear(input);
    userEvent.type(input, '42');
    expect(mockUpdateRub).toHaveBeenCalledTimes(1);
  });
});

describe('when typed in a USD input', () => {
  it('should update its value', () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Quantita in USD/);

    userEvent.clear(input);
    userEvent.type(input, '42');
    expect(mockUpdateUsd).toHaveBeenCalledTimes(1);
  });
});
