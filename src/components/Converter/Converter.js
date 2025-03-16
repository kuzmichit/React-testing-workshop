import styles from './Converter.module.css';
import { useState } from 'react';

export const Converter = () => {
  const [rub, setRub] = useState(100);
  const [usd, setUsd] = useState(1);

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
          onChange={(e) => setRub(e.target.value)}
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
          onChange={(e) => setUsd(e.target.value)}
        />
      </label>
    </form>
  );
};
