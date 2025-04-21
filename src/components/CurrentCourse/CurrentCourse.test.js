import { render, screen } from '@testing-library/react';
import { CurrentCourse } from './CurrentCourse';

describe('Quando renderizziamo il componente', () => {
  it('dovrebbe contenere un testo corretto ', () => {
    render(<CurrentCourse />);

    const result = screen.getByText(new RegExp(/10tr/i));

    expect(result).toBeInTheDocument();
  });
});
