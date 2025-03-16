import { render, screen } from '@testing-library/react';
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

// Descrive il comportamento del campo di input RUB quando l'utente digita un valore
describe('when typed in the rub input', () => {
  // Specifica un test che verifica se l'input viene aggiornato correttamente
  it('should update its value', async () => {
    // Renderizza il componente <Converter /> all'interno dell'ambiente di test
    render(<Converter />);

    // Seleziona l'elemento input basandosi sull'attributo `aria-label`
    const input = screen.getByLabelText(/Quantita in RUB:/);

    // Cancella il valore esistente all'interno dell'input
    userEvent.clear(input);

    // Simula la digitazione del valore '42' nell'input
    await userEvent.type(input, '42');

    // Verifica che il valore dell'input sia stato aggiornato correttamente
    expect(input).toHaveValue(42); // NB: Jest gestisce il confronto stringa/numero automaticamente
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
