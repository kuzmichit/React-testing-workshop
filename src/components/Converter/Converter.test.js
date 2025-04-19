import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Converter } from './Converter';

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();

jest.mock('./useConverter', () => ({
  useConverter() {
    return {
      rub: '100',
      usd: '2.48',
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    };
  },
}));

describe('when rendered', () => {
  it('input should contain an expected rub amount', () => {
    // Renderizza il componente <Converter />
    render(<Converter />);

    // Cerca il testo della citazione all'interno del documento
    expect(screen.getByLabelText(/Quantita in RUB:/)).toHaveValue(100);
  });

  it('input should contain an expected usd amount', () => {
    render(<Converter />);

    const result = screen.getByLabelText(/Quantita in USD:/);
    expect(result).toHaveValue(2.48);
  });
});

// Descrive il comportamento del campo di input RUB quando l'utente digita un valore
describe('when typed in the rub input', () => {
  it('should update its value', async () => {
    render(<Converter />);

    const input = screen.getByLabelText(/Quantita in RUB:/i);

    await userEvent.clear(input);
    await userEvent.type(input, '2');

    expect(mockUpdateRub).toHaveBeenCalledWith('1002'); // meglio usare l'ultima chiamata
  });
});

describe('when typed in the usd input', () => {
  it('should update its value', async () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Quantita in USD:/);

    await userEvent.clear(input);
    await userEvent.type(input, '5');
    expect(mockUpdateUsd).toHaveBeenCalledWith('2.485');
  });
});
