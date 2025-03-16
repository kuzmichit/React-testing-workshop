export function rubToUsd(value, rate) {
  return Number((value / rate).toFixed(2));
}

export function usdToRub(value, rate) {
  return Number((value * rate).toFixed(2));
}
