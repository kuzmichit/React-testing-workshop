import { useState } from 'react';
import { rubToUsd, usdToRub } from '../../domain/converter';

export function useConverter(initialRubValue, rate) {
  const calculatedUsdAmount = rubToUsd(initialRubValue, rate);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  function createUpdater(direction) {
    const mapping = {
      'rub-usd': {
        convert: rubToUsd,
        setConverted: setUsd,
        setOriginal: setRub,
      },
      'usd-rub': {
        convert: usdToRub,
        setConverted: setRub,
        setOriginal: setUsd,
      },
    };

    const { convert, setConverted, setOriginal } = mapping[direction];

    return function update(value) {
      const original = Number(value);
      const converted = convert(original, rate);
      setOriginal(original);
      setConverted(converted);
    };
  }

  const updateRub = createUpdater('rub-usd');
  const updateUsd = createUpdater('usd-rub');

  // function updateRub(value) {
  //   const rub = Number(value);
  //   const usd = rubToUsd(rub, rate);
  //   setRub(rub);
  //   setUsd(usd);
  // }

  // function updateUsd(value) {
  //   const usd = Number(value);
  //   const rub = usdToRub(usd, rate);
  //   setRub(rub);
  //   setUsd(usd);
  // }

  return {
    rub,
    usd,
    updateRub,
    updateUsd,
  };
}
