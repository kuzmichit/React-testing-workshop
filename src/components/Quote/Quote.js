import { quotes } from './quotes';

export const Quote = () => {
  const { text, author } = quotes[0];

  return (
    <>
      <blockquote>{text}</blockquote>
      <cite>- {author}</cite>
    </>
  );
};
