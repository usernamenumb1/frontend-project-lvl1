export default (min = 0, max = 99, func) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (func) return [rand, func(rand)];
  return rand;
};
