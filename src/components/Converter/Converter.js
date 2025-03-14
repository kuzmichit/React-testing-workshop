import styles from './Converter.module.css';

export const Converter = () => {
  return (
    <form className={styles.converter}>
      <label>
        <p>Quantita in RUB:</p>
        <input type="number" name="rub" min="0" step={1} value={1} />
      </label>
      <label>
        <p>Quantita in USD:</p>
        <input type="number" name="usd" min="0" step={1} value={42} />
      </label>
    </form>
  );
};
