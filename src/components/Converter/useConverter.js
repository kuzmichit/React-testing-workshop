import { useState } from 'react';
import { rubToUsd, usdToRub } from '../../domain/converter';

export function useConverter(initialRubValue, rate) {
  const calculatedUsdAmount = rubToUsd(initialRubValue, rate);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  function updateRub(value) {
    const rub = Number(value);
    const usd = rubToUsd(rub, rate);
    setRub(rub);
    setUsd(usd);
  }

  function updateUsd(value) {
    const usd = Number(value);
    const rub = usdToRub(usd, rate);
    setRub(rub);
    setUsd(usd);
  }

  return {
    rub,
    usd,
    updateRub,
    updateUsd,
  };
}
