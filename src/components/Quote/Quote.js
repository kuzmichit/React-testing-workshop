import { quotes } from './quotes';
import style from './Quote.module.css';

export const Quote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[randomIndex];

  return (
    <>
      <blockquote className={style.quote}>{text}</blockquote>
      <cite>- {author}</cite>
    </>
  );
};
