const getRandom = (min = 0, max = 99) => Math.floor(Math.random() * (max - min)) + min;
const utils = {
  getRandom,
};
export default utils;
