import { quotes } from './quotes';

export const Quote = () => {
  const { text, author } = quotes[1];

  return (
    <>
      <blockquote>{text}</blockquote>
      <cite>- {author}</cite>
    </>
  );
};
