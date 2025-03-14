/**
 *  @Note Cosa fa il test ?
 *  Seleziona una citazione di test dall'array quotes.
 *  Renderizza il componente <Quote />.
 *  Verifica che il testo della citazione sia visibile nel DOM.
 **/

import { render, screen } from '@testing-library/react';
import { Quote } from './Quote';
import { quotes } from './quotes';

// Descrive un gruppo di test relativi al rendering del componente <Quote />
describe('when rendered', () => {
  const testStub = quotes[1];
  const { text, author } = testStub;

  // Testa se il testo della citazione appare correttamente nel DOM
  it('should contain an expected text', () => {
    // Renderizza il componente <Quote />
    render(<Quote quote={testStub} />);

    // Cerca il testo della citazione all'interno del documento
    const result = screen.getByText(new RegExp(text));

    // Verifica che il testo sia effettivamente presente nel DOM
    expect(result).toBeInTheDocument();
  });

  it('should contain an expected text', () => {
    render(<Quote quote={testStub} />);

    // Usiamo new RefExp per eseguire una ricerca come il di espressione regolare non testo semplice
    const result = screen.getByText(new RegExp(author));

    expect(result).toBeInTheDocument();
  });
});
