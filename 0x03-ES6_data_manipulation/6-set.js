export default function setFromArray(array) {
  const set = new Set();

  array.forEach((val) => {
    set.add(val);
  });

  return set;
}
