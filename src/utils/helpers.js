export function tempDecimal(n) {
  const l = n / Math.pow(10, 1);
  const degree = l.toString().slice(0, -2);
  return degree;
}
