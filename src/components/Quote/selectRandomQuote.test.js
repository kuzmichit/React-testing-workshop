import { quotes } from './quotes';
import { selectRandomQuote } from './selectRandomQuote';

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.42);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('when called with a quotes list', () => {
  it('should return  the second quote', () => {
    const result = selectRandomQuote(quotes);
    expect(result).toEqual(quotes[1]);
  });
});
