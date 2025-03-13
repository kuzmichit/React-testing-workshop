import { quotes } from './quotes';
import styles from './Quote.module.css';
import { selectRandomQuote } from './selectRandomQuote';

/* eslint-disable react/prop-types */
const defaultQuote = selectRandomQuote(quotes);

export const Quote = ({ quote = defaultQuote }) => {
  const { text, author } = quote;

  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite>- {author}</cite>
    </footer>
  );
};
