import styles from './Converter.module.css';
import { useConverter } from './useConverter';

export const Converter = () => {
  const { rub, usd, updateRub, updateUsd } = useConverter(10, 42);

  return (
    <form className={styles.converter}>
      <label>
        <p>Quantita in RUB:</p>
        <input
          type="number"
          name="rub"
          min="0"
          step={1}
          value={rub}
          onChange={(e) => updateRub(e.target.value)}
        />
      </label>
      <label>
        <p>Quantita in USD:</p>
        <input
          type="number"
          name="rub"
          min="0"
          step={1}
          value={usd}
          onChange={(e) => updateUsd(e.target.value)}
        />
      </label>
    </form>
  );
};
