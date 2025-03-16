import { render, screen, cleanup } from '@testing-library/react';
import { Converter } from './Converter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  console.clear(); // Pulisce la console prima di ogni test
});

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
    expect(result).toHaveValue(1);
  });
});

describe('when typed in the rub input', () => {
  it('should update its value', async () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Quantita in RUB:/);

    userEvent.clear(input);
    await userEvent.type(input, '42');
    expect(input).toHaveValue(42);
  });
});

describe('when typed in the usd input', () => {
  it('should update its value', async () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Quantita in USD:/);

    userEvent.clear(input);
    await userEvent.type(input, '57');
    expect(input).toHaveValue(57);
  });
});
