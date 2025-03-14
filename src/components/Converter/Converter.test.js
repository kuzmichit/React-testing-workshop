import { render, screen, cleanup } from '@testing-library/react';
import { Converter } from './Converter';

afterEach(() => cleanup());

describe('when rendered', () => {
  it('input should contain an expected rub amount', () => {
    // Renderizza il componente <Converter />
    render(<Converter />);

    // Cerca il testo della citazione all'interno del documento
    const result = screen.getByLabelText(/Quantita in RUB:/);
    expect(result).toHaveValue(1);
  });

  it('input should contain an expected usd amount', () => {
    render(<Converter />);

    const result = screen.getByLabelText(/Quantita in USD:/);
    expect(result).toHaveValue(42);
  });
});
